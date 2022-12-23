import { env } from "$env/dynamic/private"
import notion_data from "$lib/data/notion_data"
import { Client } from "@notionhq/client"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load = (async () => {
    const notion = new Client({ auth: env.NOTION_API_KEY })
    const response = await notion.databases.query({
        database_id: notion_data.posts_database_id,
        filter: {
            property: "Published",
            date: {
                is_not_empty: true,
                on_or_before: new Date().toISOString()
            }
        },
        sorts: [
            {
                property: "Published",
                direction: "descending"
            }
        ],
    })



    return {
        press_releases: response.results.map(release => {
            if (!("properties" in release)) {
                throw error(500, {
                    message: "Notion API returned a result without properties",
                    code: "NOTION_API_ERROR"
                })
            }

            console.log(release)

            return {
                title: (release.properties.Name as unknown as { title: { plain_text: string }[]}).title.map(title => title.plain_text).join(""),
                date: new Date(Date.parse((release.properties.Published as unknown as { date: { start: string } }).date.start)),
                slug: (release.properties.Slug as unknown as { rich_text: { plain_text: string}[] }).rich_text.map(text => text.plain_text).join(""),
            }
        })
    }
}) satisfies PageServerLoad