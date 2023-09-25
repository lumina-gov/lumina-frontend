<script lang="ts">
import AppBar from "./components/AppBar.svelte"
import Sidebar from "./components/Sidebar.svelte"
import Header from "./components/Header.svelte"
import Scrim from "$lib/controls/Scrim.svelte"
import NotificationsPopout from "./components/NotificationsPopout.svelte"
import AccountPopout from "./components/AccountPopout.svelte"
import { afterNavigate } from "$app/navigation"

export let data

let sidebar_opened: "default" | boolean = "default"
let dropdown: "notifications" | "account" | null = null

$: user = data.user_store.user

afterNavigate(() => {
    dropdown = null
    sidebar_opened = "default"
})
</script>

<svelte:head>
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
<div class="app">
    <Sidebar
        bind:user
        bind:sidebar_opened
        bind:dropdown/>
    <div class="content">
        <Header
            bind:sidebar_opened
            bind:dropdown
            bind:user/>
        <main>
            <slot/>
        </main>
        <AppBar
            bind:dropdown
            bind:sidebar_opened
            bind:user/>
    </div>
</div>

{#if dropdown !== null && user}
    <Scrim on:close={ () => dropdown = null }>
        <div class="popout">
            {#if dropdown === "notifications"}
                <NotificationsPopout/>
            {/if}
            {#if dropdown === "account"}
                <AccountPopout bind:user/>
            {/if}
        </div>
    </Scrim>
{/if}

<style>
.app {
    display: flex;
    height: 100%;
}
.content {
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    flex: 1;
}
main {
    flex: 1;
}
.popout {
    max-width: 400px;
    width: 100%;
}
</style>