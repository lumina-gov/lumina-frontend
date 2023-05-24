import { env } from "$env/dynamic/private"
import notion_data from "$lib/data/notion_data"
import { has_no_properties } from "$lib/utils/notion_errors"
import { Client, isFullPage } from "@notionhq/client"

export async function load() {
    const notion = new Client({ auth: env.NOTION_API_KEY })
    const response = await notion.databases.query({
        database_id: notion_data.government_organisations_database_id,
        filter: {
            property: "Public",
            checkbox: {
                equals: true
            }
        },
        sorts: [
            {
                property: "Name",
                direction: "ascending"
            }
        ],
    })

    const organisations = await Promise.all(response.results.map(async page => {
        if (!isFullPage(page)) throw has_no_properties

        return {
            name: (page.properties.Name as { title: { plain_text: string }[]}).title.map(title => title.plain_text).join(""),
            slug: (page.properties.Slug as { formula: { string: string }}).formula.string,
            description: (page.properties.Description as { rich_text: { plain_text: string }[]}).rich_text.map(rich_text => rich_text.plain_text).join(""),
            type: (page.properties.Type as { select: { name: string }}).select.name,
            website: (page.properties.Website as { url: string })?.url ?? null,
            status: (page.properties.Status as { select: { name: string }}).select.name,
            tags: (page.properties.Tags as { multi_select: { name: string }[]}).multi_select.map(multi_select => multi_select.name),
        }
    }))

    const types_set = new Set<string>()
    const statuses_set = new Set<string>()

    organisations.forEach(organisation => {
        types_set.add(organisation.type)
        statuses_set.add(organisation.status)
    })

    const core_orgs = organisations.filter(organisation => organisation.tags.includes("Core"))

    return {
        organisations,
        types: Array.from(types_set),
        statuses: Array.from(statuses_set),
        core_orgs
    }
}