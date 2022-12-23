<script lang="ts">
import { page } from "$app/stores"

export let title: string
export let description: string | undefined = undefined
export let type: "website" | "article" = "article"
export let include_suffix = true
$: real_title = include_suffix ? `${title} » Lumina » The City of the Future` : title

$: url = `https://${$page.url.host}${$page.url.pathname}${$page.url.search}`
$: og_image = `https://${$page.url.host}/api/og?title=${encodeURIComponent(title)}`
</script>
<svelte:head>
    <title>{ real_title }</title>
    <meta name="og:image" content={og_image}/>
    <meta name="og:title" content={real_title}/>
    <meta name="og:url" content="{url}"/>
    <meta name="og:type" content="{type}"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@LuminaGov"/>
    <meta name="twitter:creator" content="@LuminaGov"/>
    <meta name="twitter:title" content={real_title}/>
    <meta name="twitter:image" content={og_image}/>
    {#if description}
        <meta name="description" content="{description}"/>
        <meta name="twitter:description" content="{description}"/>
        <meta name="og:description" content="{description}"/>
    {/if}
    <link rel="canonical" href="{url}"/>
</svelte:head>