<script lang="ts">
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher()

export let href: string | undefined = undefined
export let padding = "0px"
export let max_width: string | undefined = undefined
export let shadow = true
export let direction: "vertical" | "horizontal" = "vertical"
export let gap: number | string = 0
export let reset_bg = false
export let opacity = false
export let interactive = false

$: is_clickable = (href || interactive)

$: tag = href ? "a" : "div"

function clicked(e: Event) {
    !is_clickable && dispatch("click", e)
}

function handle_keyup(e: KeyboardEvent) {
    if (e.key === "Enter") {
        clicked(e)
    }
}
</script>
<svelte:element
    class="card"
    this={tag}
    {href}
    on:click={clicked}
    on:keyup={handle_keyup}
    role="button"
    class:shadow
    tabindex={is_clickable ? 0 : -1}
    class:opacity
    class:reset_bg
    class:vertical={direction === "vertical"}
    class:horizontal={direction === "horizontal"}
    style="
        max-width: {max_width};
        gap: {typeof gap === "number" ? gap + "px" : gap};
        padding: {padding};
    "
    class:clickable={is_clickable}>
    <slot/>
</svelte:element>
<style lang="stylus">
@import 'variables'

.card
    border-radius 4px
    color white
    background transparify(white, 4%)
    width 100%
    display flex
    align-items center
    justify-content center
    background-blur(2px)
    &.clickable
        cursor pointer
        &:hover
            background transparify(white, 8%)
    &.shadow
        box-shadow 0 0 4px rgba(0, 0, 0, 0.2)
    &.reset_bg
        background mix(white, $dark_app, 10%)
    &.vertical
        flex-direction column
    &.horizontal
        flex-direction row
    &.opacity
        opacity 0.5
    &:focus-visible
        outline $brand 2px dashed
        outline-offset 2px
</style>