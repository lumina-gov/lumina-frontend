<svelte:head>
    <link
        href={env.PUBLIC_GRAPH_ENDPOINT}
        rel="preconnect">
    <link
        href="/manifest.json"
        rel="manifest">
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8MK9JSEJ2P"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8MK9JSEJ2P');
    </script>
</svelte:head>
<script lang="ts">
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