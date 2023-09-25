<script lang="ts">
import Unsupported from "./Unsupported.svelte"
import ParagraphBlock from "./ParagraphBlock.svelte"
import HeadingBlock from "./HeadingBlock.svelte"
import type { Block } from "$lib/types/block"
import ContainerDirective from "./ContainerDirective.svelte"
import ListBlock from "./ListBlock.svelte"
import BlockQuoteBlock from "./BlockQuoteBlock.svelte"
import CodeBlock from "./CodeBlock.svelte"
import TableBlock from "./TableBlock.svelte"

export let block: Block

</script>
{#if block.type === "paragraph"}
    <ParagraphBlock {block}/>
{:else if block.type === "heading"}
    <HeadingBlock {block}/>
{:else if block.type === "containerDirective"}
    <ContainerDirective {block}/>
{:else if block.type === "list"}
    <ListBlock {block}/>
{:else if block.type === "blockquote"}
    <BlockQuoteBlock {block}/>
{:else if block.type === "code"}
    <CodeBlock {block}/>
{:else if block.type === "table"}
    <TableBlock {block}/>
{:else if block.type === "leafDirective"}
    <Unsupported/>
{:else}
    <Unsupported/>
{/if}