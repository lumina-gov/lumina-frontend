<script lang="ts">
import type { IconComponent } from "$lib/utils/icon_type"
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher()

export let href: string | null = null
export let icon: IconComponent | null = null
export let opacity = true

$: tag = href ? "a" : "div" as "a" | "div"

function clicked(e: Event) {
    dispatch("click", e)
}

function handle_keyup(e: KeyboardEvent) {
    if (e.key === "Enter") {
        clicked(e)
    }
}
</script>

<svelte:element
    this={ tag }
    class="button"
    class:opacity
    href={href}
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    <svelte:component this={ icon } />
</svelte:element>
<style>
.button {
    padding: 8px;
    background: none;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
    font-size: 24px;
    &.opacity {
        color: color-mix(in srgb, white 40%, transparent);
    }

    &:hover {
        background: color-mix(in srgb, white 12%, transparent);
        color: white;
    }

    &:active {
        background: rgba(255, 255, 255, 0.08);
        color: white;
    }

    &:focus-visible {
        outline: none;
    }
}

</style>