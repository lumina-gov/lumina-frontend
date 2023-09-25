<script lang="ts">
import IconButton from "$lib/controls/IconButton.svelte"
import NotificationOutline from "svelte-material-icons/BellOutline.svelte"
import ProfileButton from "$lib/controls/ProfileButton.svelte"
import type { MeQuery } from "$lib/graphql/graphql-types"
import Logo from "$lib/icons/Logo.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import Menu from "svelte-material-icons/Menu.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import { onMount } from "svelte"
import Button from "$lib/controls/Button.svelte"

export let user: MeQuery["me"]
export let sidebar_opened: "default" | boolean
export let dropdown: "notifications" | "account" | null = null
let scrolled = false
$: authenticated = user != null

onMount(() => {
    scrolled = window.scrollY != 0
    window.addEventListener("scroll", updateScroll)
    return () => window.removeEventListener("scroll", updateScroll)
})

function updateScroll() {
    scrolled = window.scrollY != 0
}


function toggle(toggling: "notifications" | "account") {
    if (toggling === dropdown) {
        dropdown = null
    } else {
        dropdown = toggling
    }
}
</script>
<header
    class:authenticated
    class:default={ sidebar_opened === "default" }
    class:scrolled
    class:visible={ sidebar_opened === false }>
    <div class="side">
        <IconButton
            icon={Menu}
            on:click={ () => sidebar_opened = sidebar_opened === "default" ? true : !sidebar_opened }/>
        <Logo/>
    </div>
    <div class="side">
        {#if user}
            <IconButton
                href="/"
                icon={Apps}/>
            <IconButton
                icon={NotificationOutline}
                on:click={ () => toggle("notifications") }/>
            <ProfileButton on:click={ () => toggle("account") }/>
        {:else}
            <Button
                style="branded"
                href="/auth"
                left_icon={ExitToApp}
                right_icon={Settlement}>Start</Button>
        {/if}
    </div>
</header>
<style lang="stylus">
@import variables

header
    width 100%
    display none
    justify-content space-between
    align-items center
    padding 8px
    z-index 8
    background transparent
    box-shadow none
    position sticky
    top 0
    transition box-shadow 0.1s ease-in-out, background 0.1s ease-in-out
    .side
        display flex
        align-items center
        gap 8px

    &.visible
        display flex
        @media (max-width $tablet)
            &.authenticated
                display none
    &.default
        display none

    @media (max-width $tablet)
        &.default
            display flex
            &.authenticated
                display none


    &.scrolled
        box-shadow 0 0 10px 0 rgba(0, 0, 0, 0.5)
        background $dark_app
        background transparify(mix(white, $dark_app, 8%), 50%)
        background-blur(10px)
</style>