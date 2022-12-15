<script lang="ts">
export let gap = "24px"
export let vert_align: "center" | "top" | "bottom"  = "center"
</script>
<div
    class="grid"
    style="
        --vert_align: {vert_align};
        --gap: {gap};
    ">
    <slot/>
</div>
<style lang="stylus">

.grid
    display grid
    grid-auto-columns minmax(0, 1fr)
    grid-auto-flow column
    align-items var(--vert_align)
    gap var(--gap)

</style>
