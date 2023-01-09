<script lang="ts">
import { browser } from "$app/environment"

import { onDestroy, onMount, setContext } from "svelte"

let nodes: Node[] = []
export let condition = true
export let clicked_outside: (e: MouseEvent | KeyboardEvent) => void

setContext("clickoutside", nodes)

function handle_event(e: MouseEvent | KeyboardEvent, element?: Element | null) {
    if(condition) {
        // if any of the nodes were clicked on, then don't call the callback
        if(nodes.some(node => node.contains(element ?? e.target as Element))) {
            return
        }
        clicked_outside(e)
    }
}

function handle_key(e: KeyboardEvent) {
    if(e.key === "Escape") {
        clicked_outside(e)
    }
    if(e.key === "Tab") {
        // get the current focused element, since the tab was pressed on
        // a element within the clickout region
        handle_event(e, document.activeElement)
    }
}

onMount(() => {
    document.addEventListener("click", handle_event, true)
    document.addEventListener("keyup", handle_key, true)
})

onDestroy(() => {
    if(browser) document.removeEventListener("click", handle_event, true)
    if(browser) document.removeEventListener("keyup", handle_key, true)
})
</script>
<slot/>