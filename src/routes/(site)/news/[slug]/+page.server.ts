import { env } from "$env/dynamic/private"
import { get_child_blocks_recursive } from "$lib/api/notion_api"
import notion_data from "$lib/data/notion_data"
import { Client } from "@notionhq/client"
import { error } from "@sveltejs/kit"

export async function load({ params }) {
    const notion = new Client({ auth: env.NOTION_API_KEY })

    // get the page by slug
    const pages_response = await notion.databases.query({
        database_id: notion_data.posts_database_id,
        filter: {
            and: [
                {
                    property: "Slug",
                    rich_text: {
                        equals: params.slug
                    }
                },
                {
                    property: "Published",
                    date: {
                        is_not_empty: true,
                    }
                }
            ]
        }
    })

    if (pages_response.results.length === 0) {
        throw error(404, {
            message: "No page found with that slug",
            code: "PAGE_NOT_FOUND",
        })
    }

    const page = pages_response.results[0]

    const page_id = page.id

    const blocks = await get_child_blocks_recursive(page_id)

    if (!("properties" in page)) {
        throw error(500, {
            message: "Notion API returned a result without properties",
            code: "NOTION_API_ERROR"
        })
    }

    return {
        post: {
            title: (page.properties.Name as unknown as { title: { plain_text: string }[]}).title.map(title => title.plain_text).join(""),
            date: new Date(Date.parse((page.properties.Published as unknown as { date: { start: string } }).date.start)),
            tags: (page.properties.Tags as unknown as { multi_select: { name: string }[] }).multi_select.map(tag => tag.name),
            blocks
        },
    }
}