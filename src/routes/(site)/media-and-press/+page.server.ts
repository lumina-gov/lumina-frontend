import { env } from "$env/dynamic/private"
import notion_data from "$lib/data/notion_data"
import { has_no_properties } from "$lib/utils/notion_errors"
import { Client, isFullPage } from "@notionhq/client"

export async function load() {
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
            if (!isFullPage(release)) throw has_no_properties

            return {
                title: (release.properties.Name as { title: { plain_text: string }[]}).title.map(title => title.plain_text).join(""),
                date: new Date(Date.parse((release.properties.Published as unknown as { date: { start: string } }).date.start)),
                slug: (release.properties.Slug as { formula: { string: string }}).formula.string
            }
        })
    }
}