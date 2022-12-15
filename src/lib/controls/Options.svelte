<script lang="ts">
import { createEventDispatcher } from "svelte"
import ScrollbarRegion from "./ScrollbarRegion.svelte"

type T = $$Generic

const dispatch = createEventDispatcher<{ select: T, keyup: KeyboardEvent}>()

export let options: T[]
let els: HTMLDivElement[] = []
export let display_no_more_options = true

function handle_keypress(e: KeyboardEvent, index: number) {
    if (e.key === "Enter") {
        dispatch("select", options[index])
    }
    if (e.key === "ArrowUp") {
        if (index > 0) {
            els[index - 1].focus()
        } else {
            dispatch("keyup", e)
        }
    }
    if (e.key === "ArrowDown") {
        if (index < els.length - 1) {
            els[index + 1].focus()
        } else {
            dispatch("keyup", e)
        }
    }
}

export function focus() {
    els[0]?.focus()

}
</script>
<ScrollbarRegion>
    {#each options as option, i}
        <div class="option"
            bind:this={els[i]}
            on:keyup={e => handle_keypress(e, i)}
            on:click={() => dispatch("select", option)} tabindex="0">
            <slot {option}/>
        </div>
    {/each}
    <slot name="other"/>
    {#if display_no_more_options && options.length === 0}
        <div class="hint">
            No more options
        </div>
    {/if}
</ScrollbarRegion>
<style lang="stylus">
@import "variables"

.hint
    opacity 0.3
    font-size 14px
    padding 16px

.option
    padding 6px
    width 100%
    border-bottom 1px solid transparify(white, 8%)
    &:hover, &:focus
        background transparify(white, 4%)
        outline 0
        cursor pointer
    &:last-child
        border-bottom none
</style>