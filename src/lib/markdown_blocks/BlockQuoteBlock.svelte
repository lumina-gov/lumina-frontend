<script lang="ts">
import type { Blockquote } from "mdast-util-from-markdown/lib"
import BlocksArray from "./BlocksArray.svelte"

export let block: Blockquote

</script>
<blockquote>
    <BlocksArray blocks={block.children}/>
</blockquote>
<style>
blockquote {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    border-left: 4px solid rgba(255, 255, 255, 0.15);
    padding-left: 1em;
}
</style>