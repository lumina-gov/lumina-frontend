<script
    generics="X"
    lang="ts">
import { createEventDispatcher } from "svelte"
import ScrollbarRegion from "./ScrollbarRegion.svelte"


// TODO: REMOVE WHEN https://github.com/sveltejs/svelte-eslint-parser/issues/306 IS FIXED
// eslint-disable-next-line no-undef, @typescript-eslint/no-explicit-any
type T = X | any

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface $$Slots {
    default: { option: T }
}

const dispatch = createEventDispatcher<{ select: T, keyup: KeyboardEvent}>()

export let options: T[]
let els: HTMLDivElement[] = []
export let allow_other: ((query: string) => T) | undefined = undefined
export let search = ""

function handle_keypress(e: KeyboardEvent, index: number, other?: T) {
    if (e.key === "Enter") {
        dispatch("select", other || options[index])
    }
    if (e.key === "ArrowUp") {
        if (index > 0) {
            els[index - 1].focus()
            els[index - 1].scrollIntoView()
        } else {
            dispatch("keyup", e)
        }
    }
    if (e.key === "ArrowDown") {
        if (index < els.length - 1) {
            els[index + 1].focus()
            els[index - 1].scrollIntoView()
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
        <div
            bind:this={ els[i] }
            class="option"
            role="button"
            tabindex="0"
            on:keyup={ e => handle_keypress(e, i) }
            on:click|stopPropagation={ _ => dispatch("select", option) }>
            <slot {option}/>
        </div>
    {/each}
    {#if typeof allow_other === "function" && options.length === 0}
        <div
            class="other-option"
            role="button"
            tabindex="0"
            on:keyup={ e => handle_keypress(e, els.length, allow_other && allow_other(search)) }
            on:click={ _ => dispatch("select", allow_other && allow_other(search)) }>
            Use "<strong>{ search }</strong>"
        </div>
    {:else if options.length === 0}
        <div class="hint">
            No options found
        </div>
    {/if}
</ScrollbarRegion>
<style>

.other-option {
    padding: 16px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    cursor: pointer;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
    &:last-child {
        border-bottom: none;
    }
    & strong {
        color: white;
    }
    font-weight: 500;
    border-radius: 4px;
}

.hint {
    opacity: 0.3;
    font-size: 14px;
    padding: 16px;
}

.option {
    padding: 6px;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    &:is(:hover, :focus) {
        background: rgba(255, 255, 255, 0.04);
        outline: 0;
        cursor: pointer;
    }
    &:last-child {
        border-bottom: none;
    }
}

</style>