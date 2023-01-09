<script lang="ts">
import type { BlockResponseWithChildren } from "$lib/api/notion_api"
import Icon from "$lib/display/Icon.svelte"
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"
import BlocksArray from "./BlocksArray.svelte"
import RichTextArray from "./RichTextArray.svelte"
import Information from "svelte-material-icons/Information.svelte"

export let block: BlockResponseWithChildren<CalloutBlockObjectResponse>

$: icon_url = block.callout.icon && "external" in block.callout.icon ? block.callout.icon.external.url : null
</script>
<div class="callout">
    <div class="icon">
        {#if icon_url}
            <img
                class="icon"
                alt="icon"
                src={icon_url}/>
        {:else}
            <Icon icon={Information}/>
        {/if}
    </div>
    <div class="content">
        <RichTextArray rich_text_array={block.callout.rich_text}/>
        {#if block.children}
            <BlocksArray blocks={block.children}/>
        {/if}
    </div>
</div>
<style lang="stylus">
@import "variables"

.icon
    width 1em
    height 1em

.callout
    padding 12px
    border-radius 4px
    width 100%
    background-color transparify($brand, 8%)
    border 1px solid transparify($brand, 20%)
    color $brand
    display flex
    gap 8px

.content
    display flex
    flex-direction column
    gap 8px
</style>