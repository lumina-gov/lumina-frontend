<script lang="ts">
import { getContext, onMount } from "svelte"

const nodes = getContext("clickoutside") as Node[]

let div: HTMLDivElement
if (!nodes) {
    throw new Error("No clickoutside context found")
}

onMount(() => {
    nodes.push(div as Node)
})
</script>
<div bind:this={div}>
    <slot/>
</div>
<style lang="stylus">
div
    display contents
</style>