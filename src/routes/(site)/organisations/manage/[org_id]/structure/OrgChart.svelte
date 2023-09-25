<script lang="ts">
import { browser } from "$app/environment"
import ScrollbarRegion from "$lib/controls/ScrollbarRegion.svelte"
import Segment from "$lib/controls/Segment.svelte"
import SingleSegment from "$lib/controls/SingleSegment.svelte"
import type { Prop } from "$lib/utils/typed_props"
import { onMount, onDestroy, tick } from "svelte"
import Minus from "svelte-material-icons/Minus.svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import Shape from "svelte-material-icons/Shape.svelte"
import Component from "./Component.svelte"
import { get_paths_for_component } from "./path"

export let components: Record<string, Prop<Component, "component">>
export let root: string | null
export let active_component_id: string | null

let component_els: Record<string, HTMLElement> = {}
let inner: HTMLElement
let options: Array<"Body" | "Position" | "Role"> = [
    "Body",
    "Position",
    "Role"
]

onMount(() => {
    inner.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
})

function set_root(type: Prop<Component, "component">["type"] | null) {
    if (!type) {
        root = null
        return
    }
    const id = Math.random().toString(36).slice(2)
    components[id] = {
        id,
        name: "",
        type,
        children: []
    }
    root = id
    active_component_id = id
}

const resize = () => components = components
onMount(() => {
    window.addEventListener("resize", resize)
})

onDestroy(() => {
    if(browser) window.removeEventListener("resize", resize)
})

async function scale_changed(_: unknown) {
    await tick()
    components = components
}
$: scale_changed(scale)

$: paths = Object.values(components)
    .map(component => get_paths_for_component(component, inner, component_els, scale))
    .reduce((acc, val) => Object.assign(acc, val), {})

let scale = 1

</script>
<div class="wrapper">
    <div class="zoom">
        <Segment
            left_icon={Minus}
            on:click={ () => scale -= 0.15 * scale  }/>
        <Segment
            left_icon={Plus}
            on:click={ () => scale += 0.15 * scale }/>
    </div>
    <ScrollbarRegion bind:scale>
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
            bind:this={ inner }
            class="inner"
            on:keyup={ e => e.key === "Escape" ? active_component_id = null : null }
            on:click={ e => e.target === inner ? active_component_id = null : null }>
            {#if root}
                <Component
                    bind:component_els
                    bind:active_component_id
                    bind:component={ components[root] }
                    bind:components/>
            {:else}
                <SingleSegment
                    left_icon={Shape}
                    options={options}
                    placeholder="Add component"
                    on:select={ e => set_root(e.detail) }
                />
            {/if}
            <svg
                height="100%"
                width="100%">
                <path
                    d={Object.values(paths).join(" ")}
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3" />
            </svg>
        </div>
    </ScrollbarRegion>
</div>
<style>
.wrapper {
    flex: 1;
    background: rgba(var(--white-rgb), 0.04);
    overflow: auto;
    display: flex;
    align-items: center;
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

.zoom {
    top: 16px;
    right: 16px;
    display: flex;
    position: absolute;
    z-index: 2;
    gap: 8px;
}

.inner {
    padding: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: max-content;
    min-height: max-content;
}

svg {
    position: absolute;
    color: rgba(var(--white-rgb), 0.1);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
}
</style>