<script lang="ts">
import AppbarButton from "$lib/controls/AppbarButton.svelte"
import Menu from "svelte-material-icons/Menu.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import NotificationOutline from "svelte-material-icons/BellOutline.svelte"
import ProfileButton from "$lib/controls/ProfileButton.svelte"
import { afterNavigate } from "$app/navigation"
import type { MeQuery } from "$lib/graphql/graphql-types"

export let dropdown: "notifications" | "account" | null = null
export let user: MeQuery["me"] | null
export let sidebar_opened: "default" | boolean

function toggle(toggling: "notifications" | "account") {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}

afterNavigate(() => {
    dropdown = null
})

</script>
{#if user}
    <div class="app-bar">
        <AppbarButton
            left_icon={Menu}
            on:click={ () => sidebar_opened = sidebar_opened === "default" ? true : !sidebar_opened }/>
        <AppbarButton
            href="/"
            left_icon={Apps}/>
        <AppbarButton
            left_icon={NotificationOutline}
            on:click={ () => toggle("notifications") }/>
        <ProfileButton on:click={ () => toggle("account") }/>
    </div>
{/if}
<style>
.app-bar {
    position: sticky;
    bottom: 0;
    display: none;
    z-index: 5;
    background: var(--dark);
    border-top: 1px solid rgba(var(--white-rgb), 0.1);
    padding: 6px;

    @media (max-width: 900px) {
        display: flex;
    }

    @media all and (display-mode: standalone) {
        padding-bottom: 30px;
    }
}
</style>