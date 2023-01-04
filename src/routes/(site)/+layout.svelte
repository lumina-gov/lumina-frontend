<script lang="ts">
import type { LayoutData } from "./$types"
import Footer from "./Footer.svelte"
import Navigation from "./Navigation.svelte"
import AppBar from "./AppBar.svelte"
import Rater from "./Rater.svelte"
import ClickoutRegion from "$lib/controls/ClickoutRegion.svelte"
import Inside from "$lib/controls/Inside.svelte"

export let data: LayoutData

let nav_opened = false

$: authenticated = data.user_wrapper.user != null

</script>

<svelte:head>
    <link rel="manifest" href="/manifest.json">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8MK9JSEJ2P"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-8MK9JSEJ2P');
    </script>
</svelte:head>
<div class="layout" class:authenticated>
    <ClickoutRegion clicked_outside={() => nav_opened = false}>
        <AppBar bind:user={data.user_wrapper.user} bind:nav_opened/>
        <Inside>
            <Navigation bind:user={data.user_wrapper.user} bind:nav_opened/>
        </Inside>
    </ClickoutRegion>
    <div class="content">
        <slot/>
    </div>
    {#if !data.user_wrapper.user}
        <Rater/>
        <Footer/>
    {/if}
</div>
<style lang="stylus">
@import 'variables'

.content
    flex 1
    display flex
    flex-direction column
    @media (max-width $tablet)
        overflow-y auto
        height 100%


.layout
    display flex
    flex-direction column
    min-height 100%
    &.authenticated
        @media (max-width $tablet)
            height 100vh
            display grid
            overflow-y hidden
            grid-template-rows 1fr 60px // content, AppBar

    background rgba(0,0,0,0.2)
    &:before
        content ""
        position absolute
        top 0
        left 0
        width 100%
        z-index -1
        height 100%
        opacity 0.06
        background-image url("/images/bg-pattern.svg")
        background-position 50% 50%

</style>