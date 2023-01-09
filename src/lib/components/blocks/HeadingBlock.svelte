<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import type { Heading1BlockObjectResponse, Heading2BlockObjectResponse, Heading3BlockObjectResponse, RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import RichTextArray from "./RichTextArray.svelte"

export let block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse

$: level = parseInt(block.type.replace("heading_", "")) + 1 as 2 | 3 | 4

$: rich_text_array = get_rich_text(block)

function get_rich_text(block: Heading1BlockObjectResponse | Heading2BlockObjectResponse | Heading3BlockObjectResponse): RichTextItemResponse[] {
    if ("heading_1" in block) {
        return block.heading_1.rich_text
    } else if ("heading_2" in block) {
        return block.heading_2.rich_text
    } else if ("heading_3" in block) {
        return block.heading_3.rich_text
    } else {
        return []
    }
}

</script>
<Heading
    {level}
    underline={true}>
    <RichTextArray {rich_text_array}/>
</Heading>