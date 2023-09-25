
<script lang="ts">

import type { IconComponent } from "$lib/utils/icon_type"
import { createEventDispatcher } from "svelte"

export let href: string | null = null
export let left_icon: IconComponent | null = null
export let left_icon_props: Record<string, unknown> = {}
export let right_icon: IconComponent | null = null
export let active = false
$: tag = href ? "a" : "div" as "a" | "div"

let dispatch = createEventDispatcher()

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
    class:active
    href={href}
    role="button"
    tabindex="0"
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    {#if left_icon}
        <span class="icon">
            <svelte:component
                this={ left_icon }
                {...left_icon_props} />
        </span>
    {/if}
    {#if $$slots.default}
        <span class="text">
            <slot/>
        </span>
    {/if}
    {#if right_icon}
        <span class="icon">
            <svelte:component this={ right_icon } />
        </span>
    {/if}
</svelte:element>

<style>
.button {
    padding: 10px 10px;
    color: white;
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    border-radius: 4px;
    width: auto;
    cursor: pointer;
    font-weight: 600;
    width: 100%;
    height: 100%;

    color: rgba(var(--white-rgb), 0.8);

    & .text {
        padding: 0px 12px;
    }

    & .icon {
        font-size: 20px;
        display: inline-flex;
    }

    &:focus-visible {
        outline: 2px solid var(--brand);
        outline-offset: 2px;
    }

    &:is(:hover, :focus) {
        background: rgba(var(--white-rgb), 0.08);
        color: white;
    }

    &:active {
        background: rgba(var(--white-rgb), 0.04);
    }
}
</style>
