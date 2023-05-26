<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import GenericBlock from "./GenericBlock.svelte"

export let blocks: BlockResponseWithChildren[]
</script>
<div class="blocks-array">
    {#each blocks as block}
        <GenericBlock {block}/>
    {/each}
</div>
<style lang="stylus">

.blocks-array
    display flex
    flex-direction column
    gap 24px
    width 100%
    align-items flex-start
</style>