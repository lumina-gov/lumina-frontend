<script lang="ts">
import type { SvelteComponent } from "svelte"


export let icon: typeof SvelteComponent
export let size: number = undefined
</script>
<div class="icon">
    <svelte:component this={icon} size={size}/>
</div>
<style lang="stylus">

.icon
    display inline-flex
</style>