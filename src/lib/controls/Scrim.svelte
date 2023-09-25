<script lang="ts">
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher<{ close: void }>()
let scrim: HTMLDivElement

</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    bind:this={ scrim }
    class="scrim"
    on:click={ e => {
        if (e.target === scrim) {
            dispatch("close")
        }
    } }>
    <slot/>
</div>
<style>
.scrim {
    z-index: 99;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    padding: 40px;
    right: 0;
    bottom: 0;
    background: color-mix(in srgb, black 40%, transparent);
    backdrop-filter: blur(4px);
}
</style>