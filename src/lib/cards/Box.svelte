<script lang="ts">
export let href: string | undefined = undefined
export let padding = false
export let click_handler: ((e: Event) => void) | undefined = undefined
export let max_width = "100%"
export let direction: "vertical" | "horizontal" = "vertical"
export let gap = "0px"

$: is_clickable = href || click_handler
$: tag = is_clickable ? "a" : "div"
</script>
<svelte:element
    class="box {padding ? 'padding' : ''} {direction}"
    this={tag}
    href={href}
    class:padding
    class:vertical={direction === "vertical"}
    class:horizontal={direction === "horizontal"}
    style="
        max-width: {max_width};
        gap: {gap};
    ">
    <slot/>
</svelte:element>
<style lang="stylus">
@import 'variables'

.box
    width 100%
    display flex
    align-items center
    justify-content center
    &.vertical
        flex-direction column
    &.horizontal
        flex-direction row
    &.padding
        padding 20px
</style>