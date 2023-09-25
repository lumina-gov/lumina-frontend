<script lang="ts">
export let color: "brand" | "red" = "brand"
</script>
<span class={color}><slot/></span>
<style>
span {
    background: var(--brand);
    padding: 0 4px;
    display: inline-flex;
    &.red {
        background: var(--red);
    }
}
</style>