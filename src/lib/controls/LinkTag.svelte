<script lang="ts">

import type { IconComponent } from "$lib/utils/icon_type"
import { createEventDispatcher } from "svelte"

export let href: string | null = null
export let left_icon: IconComponent | null = null
export let right_icon: IconComponent | null = null
export let right_icon_opacity = 1
$: tag = href ? "a" : "div" as "a" | "div"

let disabled = false

let dispatch = createEventDispatcher()

function clicked(e: Event) {
    !disabled && dispatch("click", e)
}

function handle_keyup(e: KeyboardEvent) {
    if (e.key === "Enter") {
        clicked(e)
    }
}
</script>
<svelte:element
    this={ tag }
    class="tag"
    href={href}
    role={disabled ? undefined : "button"}
    tabindex={disabled ? -1 : 0}
    on:click={ clicked }
    on:keyup={ handle_keyup }>
    {#if left_icon}
        <span class="icon">
            <svelte:component this={ left_icon } />
        </span>
    {/if}
    {#if $$slots.left}
        <slot name="left"/>
    {/if}
    <span class="text">
        <slot/>
    </span>
    {#if $$slots.right}
        <slot name="right"/>
    {/if}
    {#if right_icon}
        <span
            style:opacity={ right_icon_opacity }
            class="icon">
            <svelte:component this={ right_icon } />
        </span>
    {/if}
</svelte:element>

<style>
    .tag {
        padding: 6px;
        gap: 6px;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        color: white;
        font-size: 18px;
        font-weight: 500;
        background: rgba(255, 255, 255, 0.04);
        border-radius: 4px;

        & .text {
            padding: 0 4px;
        }

        & .icon {
            display: inline-flex;
        }

        &:hover {
            cursor: pointer;
            background: rgba(255, 255, 255, 0.08);
        }
    }
</style>