import { env } from "$env/dynamic/private"
import { Client } from "@notionhq/client"
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export type BlockResponseWithChildren<BlockType = BlockObjectResponse> = BlockType & {
    children?: BlockResponseWithChildren[]
}

export async function get_child_blocks_recursive(block_id: string): Promise<BlockResponseWithChildren[]> {
    const notion = new Client({ auth: env.NOTION_API_KEY })

    const response = await notion.blocks.children.list({
        block_id: block_id,
    })

    const blocks = response.results.map(async block_object => {
        const block: BlockResponseWithChildren = block_object as BlockObjectResponse

        if ("has_children" in block && block.has_children) {
            block.children = await get_child_blocks_recursive(block.id)
        }

        return block
    })

    return await Promise.all(blocks) as BlockObjectResponse[]
}