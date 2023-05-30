<script lang="ts">
import type { SvelteComponent } from "svelte"
import Unsupported from "./Unsupported.svelte"
import ParagraphBlock from "./ParagraphBlock.svelte"
import HeadingBlock from "./HeadingBlock.svelte"
import type { Block } from "$lib/types/block"
import ContainerDirective from "./ContainerDirective.svelte"
import type { PartialRecord } from "$lib/utils/typed_props"
import ListBlock from "./ListBlock.svelte"
import BlockQuoteBlock from "./BlockQuoteBlock.svelte"
import CodeBlock from "./CodeBlock.svelte"
import TableBlock from "./TableBlock.svelte"
import LeafDirective from "./LeafDirective.svelte"

export let block: Block

let block_types: PartialRecord<Block["type"], typeof SvelteComponent> = {
    "heading": HeadingBlock,
    "paragraph": ParagraphBlock,
    "containerDirective": ContainerDirective,
    "leafDirective": LeafDirective,
    "list": ListBlock,
    "blockquote": BlockQuoteBlock,
    "code": CodeBlock,
    "table": TableBlock,
}

function get_block_type(block: Block) {
    return block_types[block.type] || Unsupported
}

</script>
<svelte:component
    this={ get_block_type(block) }
    block={block}/>