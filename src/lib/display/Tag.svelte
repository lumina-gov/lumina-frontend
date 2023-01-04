<script lang="ts">
export let color: "red" | "brand" | "blue" | "white" | "yellow" | "green" = "brand"
export let opacity = false
export let text = ""
</script>

<span class="tag {color}" class:opacity>
    <div class="text">
        {#if $$slots.default}
            <slot />
        {:else}
            {text}
        {/if}
    </div>
</span>
<style lang="stylus">
@import 'variables'

.tag
    padding 0 2px
    line-height 1
    font-weight 600
    display inline-flex
    border-radius 4px
    color white
    background transparify(white, 16%)
    .text
        padding 3px 4px
        line-height 100%

    &.opacity
        opacity 0.5

    &.brand
        color $brand
        background transparify($brand, 16%)

    &.red
        color $red
        background transparify($red, 16%)

    &.blue
        color $blue
        background transparify($blue, 16%)

    &.white
        color white
        background transparify(white, 12%)

    &.yellow
        color $yellow
        background transparify($yellow, 16%)

    &.green
        color $green
        background transparify($green, 16%)
</style>
