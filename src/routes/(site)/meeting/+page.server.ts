import { env } from "$env/dynamic/private"
import notion_data from "$lib/data/notion_data"
import { has_no_properties } from "$lib/utils/notion_errors"
import { Client, isFullPage } from "@notionhq/client"
import type { PageServerLoad } from "./$types"

export const load = (async () => {
    const notion = new Client({ auth: env.NOTION_API_KEY })

    // get the page by slug
    const response = await notion.databases.query({
        database_id: notion_data.meeting_times_database_id,
        sorts: [
            {
                property: "Name",
                direction: "ascending",
            }
        ]
    })

    return {
        dates: response.results.map(result => {
            if(!isFullPage(result)) throw has_no_properties

            return {
                id: result.id,
                name: (result.properties.Name as { title: { plain_text: string }[]}).title.map(title => title.plain_text).join(""),
                date: new Date(Date.parse((result.properties.Date as unknown as { date: { start: string } }).date.start)),
                users: (result.properties["Discord Username"] as { multi_select: { name: string }[] }).multi_select.map(user => user.name),
            }
        })
    }
}) satisfies PageServerLoad