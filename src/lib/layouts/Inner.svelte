<script lang="ts">
export let max_width: string | number
export let gap: number
export let vertical_padding: number
export let align: "center" | "flex-start" | "flex-end" = "flex-start"
</script>
<div
    style:--max-width={ typeof max_width === "number" ? max_width + "px" : max_width }
    style:--gap="{ gap }px"
    style:--align={ align }
    style:--vertical-padding="{ vertical_padding }px"
    class="inner">
    <slot/>
</div>
<style>
.inner {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    gap: var(--gap);
    padding: var(--vertical-padding, 0) 24px;
    display: flex;
    flex-direction: column;
    align-items: var(--align);
}
</style>