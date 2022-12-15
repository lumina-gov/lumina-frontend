<script lang="ts">
import { tweened } from "svelte/motion"
import { cubicOut } from "svelte/easing"
import { afterNavigate, beforeNavigate } from "$app/navigation"
import { fade } from "svelte/transition"

export let loading = false

const progress = tweened(0, {
    duration: 3500,
    easing: cubicOut
})

$: if (!loading) {
    progress.set(1, { duration: 1000 })
}

beforeNavigate(() => {
    loading = true
})

afterNavigate(() => {
    loading = false
})

</script>

{#if $progress !== 1}
    <div class="progress-bar" out:fade|local={{ delay: 500 }}>
        <div class="progress-sliver" style={`--width: ${$progress * 100}%`} />
    </div>
{/if}

<style lang="stylus">
@import 'variables'

.progress-bar
    position fixed
    top 0
    left 0
    right 0
    height 6px
    z-index 1000


.progress-sliver
    width var(--width)
    background-color $brand
    height 100%
</style>