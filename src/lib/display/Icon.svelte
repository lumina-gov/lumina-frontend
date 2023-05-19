<script lang="ts">
import type { SvelteComponent } from "svelte"

export let icon: typeof SvelteComponent
export let size: number | string | undefined = undefined
export let color: "brand" | "white" | "red" | "yellow" | "orange" | "purple" | "blue" | "yellow_green" | "green" | undefined = undefined
export let opacity = 1

</script>
<div
    style:opacity
    class="icon {color ?? ""}"
    on:click
    on:keypress>
    <svelte:component
        this={ icon }
        size={size}/>
</div>
<style lang="stylus">
@import "variables"

.icon
    display inline-flex
    &.brand
        color $brand
    &.white
        color white
    &.red
        color $red
    &.yellow
        color $yellow
    &.orange
        color $orange
    &.purple
        color $purple
    &.blue
        color $blue
    &.yellow_green
        color $yellow_green
    &.green
        color $green

</style>