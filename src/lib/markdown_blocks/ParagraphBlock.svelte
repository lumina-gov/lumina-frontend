<script lang="ts">
import type { Paragraph } from "mdast-util-from-markdown/lib"
import PhrasingContentArray from "./PhrasingContentArray.svelte"

export let block: Paragraph

</script>
<p>
    <PhrasingContentArray children={block.children}/>
</p>
<style>
p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
}
</style>