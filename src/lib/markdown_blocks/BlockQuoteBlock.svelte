<script lang="ts">
import type { Blockquote } from "mdast-util-from-markdown/lib"
import BlocksArray from "./BlocksArray.svelte"

export let block: Blockquote

</script>
<blockquote>
    <BlocksArray blocks={block.children}/>
</blockquote>
<style lang="stylus">
@import variables

blockquote
    margin 0
    color transparify(white, 80%)
    border-left 4px solid transparify(white, 15%)
    padding-left 1em
</style>