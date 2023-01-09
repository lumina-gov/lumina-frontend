<script lang="ts">
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"

export let rich_text: RichTextItemResponse

$: url = "href" in rich_text ? rich_text.href : null
$: tag = url ? "a" : "span"

</script>
<svelte:element
    this={ tag }
    class:bold={ rich_text.annotations.bold }
    class:code={ rich_text.annotations.code }
    class:italic={ rich_text.annotations.italic }
    class:strikethrough={ rich_text.annotations.strikethrough }
    class:underline={ rich_text.annotations.underline }
    href={url}>
    {#if "text" in rich_text}
        { rich_text.text.content }
    {/if}
</svelte:element>
<style lang="stylus">
@import 'variables'

.bold
    font-weight bold

.italic
    font-style italic

.underline
    text-decoration underline

.strikethrough
    text-decoration line-through

.code
    font-family monospace

</style>