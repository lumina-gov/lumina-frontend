<script lang="ts">
import type { Prop } from "$lib/utils/typed_props"
import Inner from "./Inner.svelte"

export let max_width: Prop<Inner, "max_width"> = 1200
export let gap: Prop<Inner, "gap"> = 16
export let vertical_padding: Prop<Inner, "vertical_padding"> = 48
export let align: Prop<Inner, "align"> = "flex-start"
export let translucent = false
</script>
<div
    class="hero"
    class:translucent>
    <Inner
        {align}
        {gap}
        {max_width}
        {vertical_padding}>
        <slot/>
    </Inner>
</div>
<style>
.hero {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    &.translucent {
        background: rgba(255, 255, 255, 0.03);
    }

    border-top: var(--border-top);
}
</style>