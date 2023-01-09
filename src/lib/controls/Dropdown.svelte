<script lang="ts">
import { browser } from "$app/environment"
import { onDestroy, onMount } from "svelte"

export let max_height = "300px"
export let max_width = "300px"

let wrapper: HTMLElement
let left = 0
let top = 0

function resize() {
    let nearest_vertical_scrollable_parent: HTMLElement | null = wrapper.parentElement
    let nearest_horizontal_scrollable_parent: HTMLElement | null = wrapper.parentElement

    while (nearest_vertical_scrollable_parent) {
        if (
            (nearest_vertical_scrollable_parent.scrollHeight > nearest_vertical_scrollable_parent.clientHeight)
                && (
                    getComputedStyle(nearest_vertical_scrollable_parent).overflowY === "hidden"
                        || getComputedStyle(nearest_vertical_scrollable_parent).overflowY === "scroll"
                )
        ) {
            break
        }
        nearest_vertical_scrollable_parent = nearest_vertical_scrollable_parent.parentElement
    }

    while (nearest_horizontal_scrollable_parent) {
        if (
            (nearest_horizontal_scrollable_parent.scrollWidth > nearest_horizontal_scrollable_parent.clientWidth)
                && (
                    getComputedStyle(nearest_horizontal_scrollable_parent).overflowX === "hidden"
                        || getComputedStyle(nearest_horizontal_scrollable_parent).overflowX === "scroll"
                )
        ) {
            break
        }
        nearest_horizontal_scrollable_parent = nearest_horizontal_scrollable_parent.parentElement
    }

    let offset_top = 0
    let offset_left = 0

    let vertical_wrapper_bounds = nearest_vertical_scrollable_parent?.getBoundingClientRect()
    let horizontal_wrapper_bounds = nearest_horizontal_scrollable_parent?.getBoundingClientRect()

    // get the span's nearest parent who is not display: contents
    let parent = wrapper.parentElement
    while (parent && (getComputedStyle(parent).display === "contents" || getComputedStyle(parent).display === "none")) {
        parent = parent.parentElement
    }

    let parent_bounds = parent?.getBoundingClientRect()

    console.log({
        nearest_vertical_scrollable_parent,
        nearest_horizontal_scrollable_parent,
    })

    offset_top += parent_bounds?.bottom || 0
    offset_top -= vertical_wrapper_bounds?.top || 0
    offset_top += nearest_vertical_scrollable_parent?.scrollTop || 0
    offset_top += 8 // gap

    offset_left += parent_bounds?.left || 0
    offset_left -= horizontal_wrapper_bounds?.left || 0
    offset_left += nearest_horizontal_scrollable_parent?.scrollLeft || 0

    left = offset_left
    top = offset_top
}

onMount(() => {
    resize()
    window.addEventListener("resize", resize, { passive: true })
})
onDestroy(() => {
    if (browser) {
        window.removeEventListener("resize", resize)
    }
})
</script>
<div
    bind:this={ wrapper }
    style:max-height={ max_height }
    style:max-width={ max_width }
    style:left="{ left }px"
    style:top="{ top + 8 }px"
    style:position={ undefined }
    class="wrapper">
    <div class="dropdown">
        <slot/>
    </div>
</div>

<style lang="stylus">
@import "variables"

.wrapper
    position fixed
    z-index 4
    right 0px
    display flex

.dropdown
    background mix(white, $dark_app, 4%)
    box-shadow: 0px 10px 16px -6px transparify(black, 50%)
    display flex
    flex-direction column
    overflow hidden
    border-radius 6px
    width 100%
</style>