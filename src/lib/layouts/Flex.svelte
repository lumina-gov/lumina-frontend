<script lang="ts">
// Flex container

export let gap = 16
export let justify_content: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "normal" = "normal"
export let align_items: "flex-start" | "center" | "flex-end" | "stretch" | "baseline" | "normal" = "normal"
export let padding = "0"
export let direction: "row" | "column" = "column"
</script>
<div
    style:gap="{ gap }px"
    style:justify-content={ justify_content }
    style:flex-direction={ direction }
    style:padding
    style:align-items={ align_items }
    class="layout">
    <slot />
</div>
<style lang="stylus">
@import "variables"

.layout
    display flex
</style>