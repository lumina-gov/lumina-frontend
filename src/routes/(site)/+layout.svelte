<script lang="ts">
import type { LayoutData } from "./$types"
import Footer from "./Footer.svelte"
import Header from "./Header.svelte"
import Rater from "./Rater.svelte"

export let data: LayoutData
</script>
<div class="layout">
    <div class="floating-gradient"/>
    <Header bind:user={data.user_wrapper.user}/>
    <div class="content">
        <slot/>
    </div>
    <Rater/>
    <Footer/>
</div>
<style lang="stylus">
@import "variables"

.content
    flex 1

.layout
    display flex
    height 100%
    flex-direction column
    background rgba(0,0,0,0.2)
    position relative
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
</style>