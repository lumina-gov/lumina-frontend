<script lang="ts">
import HeadingComponent from "$lib/display/Heading.svelte"
import { get_plain_text } from "$lib/utils/markdown/plain_text"
import type { Heading } from "mdast-util-from-markdown/lib"
import PhrasingContent from "./PhrasingContentArray.svelte"

export let block: Heading

$: plain_text = get_plain_text(block.children)
$: id = plain_text.toLowerCase().replace(/ /g, "-")

</script>
<HeadingComponent
    {id}
    level={block.depth}>
    <PhrasingContent children={block.children}/>
</HeadingComponent>