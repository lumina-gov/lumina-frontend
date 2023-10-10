<svelte:head>
    <link
        href={env.PUBLIC_GRAPH_ENDPOINT}
        rel="preconnect">
    <link
        href="/manifest.json"
        rel="manifest">
    <script>
        partytown = {
        forward: ['dataLayer.push']
        };
    </script>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html "<" + "script>" + partytownSnippet() + "<" + "/script>"}
    <script
        src="https://www.googletagmanager.com/gtag/js?id=G-8MK9JSEJ2P"
        type="text/partytown">
    </script>
    <script type="text/partytown">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8MK9JSEJ2P');
    </script>
</svelte:head>
<script lang="ts">
import { partytownSnippet } from "@builder.io/partytown/integration"
import { env } from "$env/dynamic/public"
import AlertBar from "./AlertBar.svelte"
import PageLoaderBar from "./PageLoaderBar.svelte"
import ServiceWorkerUI from "./ServiceWorkerUI.svelte"
import Variables from "./Variables.svelte"
</script>
<Variables/>
<PageLoaderBar/>
<AlertBar/>
<ServiceWorkerUI/>
<slot/>