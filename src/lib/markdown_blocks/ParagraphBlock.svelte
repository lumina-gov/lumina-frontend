<script lang="ts">
import type { Paragraph } from "mdast-util-from-markdown/lib"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

export let block: Paragraph

</script>
<p>
    <PhrasingContentArray children={block.children}/>
</p>
<style lang="stylus">
@import variables

p
    margin 0
    color transparify(white, 80%)
</style>