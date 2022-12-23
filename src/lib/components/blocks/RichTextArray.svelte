<script lang="ts">
import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints"
import RichText from "./RichText.svelte"

export let rich_text_array: RichTextItemResponse[]
</script>
{#each rich_text_array as rich_text}
    <RichText {rich_text}/>
{/each}