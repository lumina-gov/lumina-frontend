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
export let align_items: "center" | "flex-start" | "flex-end" | "stretch" | "normal" = "center"
export let justify_content: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "normal" = "normal"
export let disabled = false

$: is_clickable = (href || interactive)

$: tag = href ? "a" : "div" as "a" | "div"

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
    this={ tag }
    style:max-width={ max_width }
    style:gap={ typeof gap === "number" ? gap + "px" : gap }
    style:align-items={ align_items }
    style:justify-content={ justify_content }
    style:padding
    class="card"
    class:clickable={ is_clickable }
    class:disabled
    class:horizontal={ direction === "horizontal" }
    class:opacity
    class:reset_bg
    class:shadow
    class:vertical={ direction === "vertical" }
    {href}
    role="button"
    tabindex={is_clickable ? 0 : -1}
    on:click={ clicked }
    on:keyup={ handle_keyup }>
    <slot/>
</svelte:element>
<style lang="stylus">
@import variables

.card
    border-radius 6px
    color white
    background transparify(white, 4%)
    width 100%
    display flex
    &.disabled
        opacity 0.6
        pointer-events none
    &.clickable
        cursor pointer
        &:hover
            background transparify(white, 8%)
    &.shadow
        box-shadow 0 2px 6px rgba(0, 0, 0, 0.3)
    &.reset_bg
        background mix(white, $dark_app, 10%)
    &.vertical
        flex-direction column
    &.horizontal
        flex-direction row
    &.opacity
        opacity 0.5
    &:focus-visible
        outline-effect()
</style>