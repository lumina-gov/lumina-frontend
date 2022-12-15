<script lang="ts">
import { browser } from "$app/environment"

import { onDestroy, onMount, setContext } from "svelte"

let nodes: Node[] = []
export let condition = true
export let clicked_outside: (e: MouseEvent | KeyboardEvent) => void

setContext("clickoutside", nodes)

function handle_event(e: MouseEvent | KeyboardEvent) {
    if(condition) {
        // if any of the nodes were clicked on, then don't call the callback
        if(nodes.some(node => node.contains(e.target as Node))) {
            return
        }
        clicked_outside(e)
    }
}

function handle_escape(e: KeyboardEvent) {
    if(e.key === "Escape") {
        handle_event(e)
    }
}

onMount(() => {
    document.addEventListener("click", handle_event, true)
    document.addEventListener("keydown", handle_escape, true)
})

onDestroy(() => {
    if(browser) document.removeEventListener("click", handle_event, true)
    if(browser) document.removeEventListener("keydown", handle_escape, true)
})
</script>
<slot/>