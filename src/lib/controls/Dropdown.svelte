<script lang="ts">
import { onMount, tick } from "svelte"

export let max_height: number = 320
export let max_width: number = 320
let width: undefined | number = undefined
let dropdown: HTMLDivElement
let left: number = 0
onMount(() => {
    resize()
    window.addEventListener("resize", resize)
    return () => {
        window.removeEventListener("resize", resize)
    }
})

// when the window resizes
async function resize() {
    // get the width of the window
    let w = window.innerWidth

    // we want to set the width of the dropdown to the width of the window
    // or the max width of the dropdown, whichever is smaller
    width = Math.min(w - 48, max_width)

    // if the right side of the dropdown is off the screen
    // we want to move it to the left by the amount it's off the screen
    let rect = dropdown.getBoundingClientRect()

    if (rect.left + width > w) {
        // the amount it's off the screen is the right side of the dropdown
        // minus the width of the window
        let off = rect.right - w

        // we want to move the dropdown to the left by the amount it's off the screen
        left = -off + 8
    } else {
        // otherwise, we want to move the dropdown to the left by 0
        left = 0
    }

    // scroll into view
    await tick()
    dropdown.scrollIntoView({ block: "nearest", inline: "nearest" })
}

</script>
<div class="wrapper">
    <div
        bind:this={ dropdown }
        style:left="{ left }px"
        style:width={ width ? width + "px" : undefined }
        style:max-height="{ max_height }px"
        style:max-width="{ max_width }px"
        class="dropdown">
        <slot/>
    </div>
</div>


<style>
.wrapper {
    height: 0;
    position: relative;
    z-index: 20;
    width: 100%;
}

.dropdown {
    background: color-mix(in srgb, var(--dark-app) 90%, white);
    box-shadow: 0px 10px 16px -6px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: absolute;
    border-radius: 6px;
}
</style>