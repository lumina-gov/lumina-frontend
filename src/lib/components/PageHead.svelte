<script lang="ts">
import { page } from "$app/stores"

export let title: string
export let description: string
export let type: "website" | "article"

$: url = `https://${$page.url.host}${$page.url.pathname}${$page.url.search}`
$: og_image = `https://${$page.url.host}/api/og?title=${title}`
</script>
<svelte:head>
    <title>{ title } » Lumina » New City Movement</title>
    <meta name="og:image" content={og_image}/>
    <meta name="og:title" content="{title} » Lumina » New City Movement"/>
    <meta name="og:description" content="{description}"/>
    <meta name="og:url" content="{url}"/>
    <meta name="og:type" content="{type}"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:site" content="@LuminaGov"/>
    <meta name="twitter:creator" content="@LuminaGov"/>
    <meta name="twitter:title" content="{title} » Lumina » New City Movement"/>
    <meta name="twitter:description" content="{description}"/>
    <meta name="twitter:image" content={og_image}/>
    <meta name="description" content="{description}"/>
</svelte:head>