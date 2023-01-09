<script lang="ts">
export let href: string | undefined = undefined
export let padding = false
export let click_handler: ((e: Event) => void) | undefined = undefined
export let max_width = "100%"
export let direction: "vertical" | "horizontal" = "vertical"
export let align_items: "center" | "flex-start" | "flex-end" | "stretch" | "normal" = "normal"
export let justify_content: "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | "normal" = "normal"
export let gap = "0px"

$: is_clickable = href || click_handler
$: tag = is_clickable ? "a" : "div"
</script>
<svelte:element
    this={ tag }
    style:align-items={ align_items }
    style:justify-content={ justify_content }
    style:gap
    style:max-width={ max_width }
    class="box {padding ? "padding" : ""} {direction}"
    class:horizontal={ direction === "horizontal" }
    class:padding
    class:vertical={ direction === "vertical" }
    href={href}>
    <slot/>
</svelte:element>
<style lang="stylus">
@import 'variables'

.box
    width 100%
    display flex
    &.vertical
        flex-direction column
    &.horizontal
        flex-direction row
    &.padding
        padding 20px
</style>