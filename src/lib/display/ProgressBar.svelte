<script>
import { cubicInOut, cubicOut } from "svelte/easing"
import { tweened } from "svelte/motion"


export let width = 50

const progress = tweened(width, {
    duration: 1000,
    easing: cubicOut
})

$: progress.set(width, {
    duration: 1000,
    easing: cubicOut
})
</script>

<div class="progress-bar">
    <div
        style:width="{ width }%"
        class="inner-bar" />
</div>

<style lang="stylus">
@import 'variables'

.progress-bar
    width: 100%
    height: 12px
    background: rgba(255,255,255,0.1)
    overflow: hidden
    border-radius: 50px


.inner-bar
    background: $brand
    height: 100%
    border-radius: 50px
    transition: width ease-in-out 0.3s
</style>
