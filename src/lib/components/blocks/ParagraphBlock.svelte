<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import type { ParagraphBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import RichTextArray from "./RichTextArray.svelte"

export let block: BlockResponseWithChildren<ParagraphBlockObjectResponse>

</script>
<p>
    <RichTextArray rich_text_array={block.paragraph.rich_text}/>
</p>
<style lang="stylus">

p
    margin 0
    opacity 0.8
</style>