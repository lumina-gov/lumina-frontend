<script lang="ts">
import type { LayoutData } from "./$types"
import AlertBar from "./AlertBar.svelte"
import PageLoaderBar from "./PageLoaderBar.svelte"
import ServiceWorkerUI from "./ServiceWorkerUI.svelte"

export let data: LayoutData
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
<div class="grid-wrapper">
    <div class="grid laptop">
        {#each new Array(16) as _}
            <div/>
        {/each}
    </div>
    <div class="grid tablet">
        {#each new Array(8) as _}
            <div/>
        {/each}
    </div>
    <div class="grid mobile">
        {#each new Array(4) as _}
            <div/>
        {/each}
    </div>
</div>
<PageLoaderBar/>
<AlertBar/>
<ServiceWorkerUI/>
<div class="floating-gradient"/>
<slot/>
<style lang="stylus">
@import 'variables'

.grid-wrapper
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index -3

.grid
    max-width 1200px
    margin 0 auto
    display none
    padding 0 16px
    gap 16px
    &.laptop
        grid-template-columns repeat(16, 1fr)
    &.tablet
        grid-template-columns repeat(8, 1fr)
    &.mobile
        grid-template-columns repeat(4, 1fr)
    @media (min-width $tablet)
        &.laptop
            display grid
    @media (min-width $mobile) and (max-width $tablet)
        &.tablet
            display grid
    @media (max-width $mobile)
        &.mobile
            display grid
    height 100%
    width 100%
    border-right 1.5px dashed transparify(white, 8%)
    border-left 1.5px dashed transparify(white, 8%)
    > div
        border-right 1.5px dashed transparify(white, 8%)
        border-left 1.5px dashed transparify(white, 8%)
        &:last-child
            border-right 1.5px dashed transparify(white, 8%)

.floating-gradient
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    z-index -1
    background radial-gradient(at 50% 50%, #000F9930 0%, #000F9900 75%)
    background-size 60% 60%
    background-repeat no-repeat
    animation move-gradient 10s ease-in-out infinite
    transform rotate(45deg) scale(2)

@keyframes move-gradient
    0%
        background-position 0% 50%
    50%
        background-position 100% 50%
    100%
        background-position 0% 50%

:global
    @import 'normalise'

    html
        display flex
        min-height 100%
        flex 1
        margin 0
        padding 0
        scroll-behavior smooth

    h1, h2, h3, h4, h5, h6
        font-weight 500

    a
        text-decoration none
        color $brand
        &:hover
            color lighten($brand, 10%)

    body
        background $dark_app
        color white
        flex 1
        margin 0
        padding 0
        min-height 100%
        font-family 'Prompt', sans-serif
        max-width 100%

</style>