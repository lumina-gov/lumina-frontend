<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import BlocksArray from "./BlocksArray.svelte"
import RichTextArray from "./RichTextArray.svelte"

export let block: BlockResponseWithChildren<QuoteBlockObjectResponse>
</script>
<blockquote>
    <p>
        <RichTextArray rich_text_array={block.quote.rich_text}/>
    </p>
    {#if block.children}
        <BlocksArray blocks={block.children}/>
    {/if}
</blockquote>
<style lang="stylus">
@import "variables"

blockquote
    border-left 4px solid $brand
    padding 0 0 0 16px
    margin 0
    display flex
    flex-direction column
    gap 16px

p
    margin 0
    opacity 0.8
    &:empty
        display none
</style>