<script lang="ts">
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints"

export let block: ImageBlockObjectResponse

</script>
{#if block.image.type === "external"}
    <img src={block.image.external.url}/>
{:else}
    <img src={block.image.file.url}/>
{/if}
<style lang="stylus">
img
    max-width 100%
    max-height 100%
    object-fit contain
</style>