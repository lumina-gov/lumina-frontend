<script lang="ts">
import type { SvelteComponent } from "svelte"


export let cardInfo: {
    icon: typeof SvelteComponent
    heading: string
    description: string
    active: boolean
    separatorActive: boolean
    el?: any
}

</script>

<div class="main" bind:this={cardInfo.el}>
    <div class="separator-wrapper">
        <div
            class="icon-wrapper"
            class:active={cardInfo.active}
        >
            <svelte:component this={cardInfo.icon} />
        </div>
        <div class="separator" class:active={cardInfo.separatorActive}/>
    </div>
    <div class="content-wrapper">
        <div class="heading">
            {cardInfo.heading}
        </div>
        <div class="description">
            {cardInfo.description}
        </div>
    </div>
</div>

<style lang="stylus">
@import "variables"

.main
    display flex
    padding 10px 20px
    &:last-child
        .separator
            display none

.seperator-wrapper
    margin-right 50px
    display flex
    flex-direction column

.icon-wrapper
    display flex
    align-items center
    justify-content center
    background-color transparify(white, 10%)
    font-size 34px
    padding 10px
    height 48px
    width 48px
    border-radius 40px
    margin-bottom 15px
    &.active
        background-color $brand

.separator
    width 4px
    background-color transparify(white, 10%)
    margin 0 auto
    overflow hidden
    height 0
    // animation for seperator height
    height 100%
    &::after
        content ""
        display inline-block
        height 0
        width 100%
        background-color $brand
        transition height 0.5s ease-in-out
    &.active
        &::after
            height 100%

.content-wrapper
    padding 10px
    margin-bottom 40px

.heading
    font-size 22px
    font-weight 600

.description
    font-size 18px
    opacity 0.6

</style>