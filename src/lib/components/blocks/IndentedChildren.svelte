<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import BlocksArray from "./BlocksArray.svelte"

export let children: BlockResponseWithChildren[]
</script>
<div class="intented-children">
    <BlocksArray blocks={children}/>
</div>
<style lang="stylus">
.intented-children
    padding-left 16px
    width 100%
</style>