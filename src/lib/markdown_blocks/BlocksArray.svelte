<script lang="ts">
import type { Content } from "mdast-util-from-markdown/lib"
import GenericBlock from "./GenericBlock.svelte"

export let blocks: Content[]
</script>
<div class="blocks-array">
    {#each blocks as block}
        <GenericBlock {block}/>
    {/each}
</div>
<style>
.blocks-array {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    line-height: 1.8em;
    width: 100%;
    align-items: flex-start;
}
</style>