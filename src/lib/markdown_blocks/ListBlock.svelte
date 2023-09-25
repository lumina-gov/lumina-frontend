<script lang="ts">
import type { List } from "mdast-util-from-markdown/lib"
import ListItemBlock from "./ListItemBlock.svelte"


export let block: List

$: tag = block.ordered ? "ol" : "ul"
</script>
<svelte:element this={ tag }>
    {#each block.children as child}
        <ListItemBlock block={child}/>
    {/each}
</svelte:element>
<style>
ol, ul {
    margin-left: 1.5em;
}
</style>