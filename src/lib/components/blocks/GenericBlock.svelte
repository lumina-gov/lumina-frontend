<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import type { SvelteComponent } from "svelte"
import Unsupported from "./Unsupported.svelte"
import ParagraphBlock from "./ParagraphBlock.svelte"
import IndentedChildren from "./IndentedChildren.svelte"
import HeadingBlock from "./HeadingBlock.svelte"
import CalloutBlock from "./CalloutBlock.svelte"
import QuoteBlock from "./QuoteBlock.svelte"
import ImageBlock from "./ImageBlock.svelte"

export let block: BlockResponseWithChildren

let block_types: { [key: string]: typeof SvelteComponent } = {
    "heading_1": HeadingBlock,
    "heading_2": HeadingBlock,
    "heading_3": HeadingBlock,
    "paragraph": ParagraphBlock,
    "callout": CalloutBlock,
    "quote": QuoteBlock,
    "image": ImageBlock,
}

$: should_render_children = block.children && ![
    "callout"
].includes(block.type)

function get_block_type(block: BlockResponseWithChildren) {
    return block_types[block.type] || Unsupported
}
</script>
<svelte:component
    this={ get_block_type(block) }
    block={block}/>
{#if block.children && should_render_children}
    <IndentedChildren children={block.children}/>
{/if}