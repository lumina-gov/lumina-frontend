<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import Tag from "$lib/display/Tag.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import Script from "svelte-material-icons/Script.svelte"

export let data
</script>
<Hero>
    <Heading
        left_icon={Script}
        level={1}>{ data.act.title }</Heading>
    <Tag>{ data.act.actStatus }</Tag>

    {#each data.act.content as content}
        {#if content.__typename === "Markdown"}
            <MarkdownRenderer markdown={content.markdown}/>
        {/if}
    {/each}
</Hero>