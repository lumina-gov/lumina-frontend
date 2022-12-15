<script lang="ts">
    import { browser } from "$app/environment"
import { onDestroy, onMount } from "svelte"

export let max_height = "300px"
export let max_width = "300px"

let wrapper: HTMLElement
let left = 0
let top = 0

function resize() {
    // get the span's nearest parent who is not display: contents
        let parent = wrapper.parentElement
        while (parent && getComputedStyle(parent).display === "contents") {
            parent = parent.parentElement
        }

        if (!parent) return

        left = parent.getBoundingClientRect().left
        top = parent.getBoundingClientRect().bottom
}

onMount(() => {
        resize()
        window.addEventListener("resize", resize)
})
onDestroy(() => {
        if (browser) {
            window.removeEventListener("resize", resize)
        }
})
</script>
<div
    class="wrapper"
    bind:this={wrapper}
    style="
        left: {left}px;
        top: {top}px;
    "
    >
    <div class="dropdown" style="
        max-height: {max_height};
        max-width: {max_width};
    ">
        <slot/>
    </div>
</div>

<style lang="stylus">
@import "variables"

.wrapper
    position absolute
    z-index 4
    right 0px
    padding-right 16px

.dropdown
    margin-top 12px
    background mix(white, $dark_app, 4%)
    box-shadow: 0px 8px 12px -4px transparify(black, 30%)
    display flex
    flex-direction column
    overflow hidden
    border-radius 4px
    width 100%
</style>