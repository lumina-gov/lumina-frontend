<script lang="ts">

import type { IconComponent } from "$lib/utils/icon_type"
import { createEventDispatcher } from "svelte"

export let href: string | null = null
export let left_icon: IconComponent | null = null
export let right_icon: IconComponent | null = null
export let style: "translucent" | "transparent" | "branded" = "branded"
export let hug = true
export let disabled = false
export let text: string | null = null

$: tag = href ? "a" : "div" as "a" | "div"

let dispatch = createEventDispatcher()

function clicked(e: Event) {
    if(disabled) e.preventDefault()
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
    class="button {style}"
    class:disabled
    class:hug
    href={href}
    role="button"
    tabindex={disabled ? -1 : 0}
    on:click={ clicked }
    on:keyup={ handle_keyup }
>
    {#if left_icon}
        <span class="icon">
            <svelte:component this={ left_icon } />
        </span>
    {/if}
    {#if $$slots.default || text}
        <span class="text">
            <slot/>
            {#if text}
                { text }
            {/if}
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
    width: 100%;
    cursor: pointer;
    font-weight: 600;

    & .text {
        padding: 0px 12px;
    }

    &.hug {
        width: auto;
    }

    & .icon {
        font-size: 20px;
        display: inline-flex;
    }

    &:not(.disabled) {
        outline: none;

        &.branded {
            background: var(--brand);

            &:is(:hover, :focus) {
                background: color-mix(in srgb, var(--brand), white 14%);
            }

            &:active {
                background: var(--brand);
            }
        }

        &.translucent {
            background: rgba(255, 255, 255, 0.08);

            &:hover, &:focus {
                background: color-mix(in srgb, white 14%, transparent);
            }

            &:active {
                background: rgba(255, 255, 255, 0.08);
            }
        }

        &.transparent {
            color: color-mix(in srgb, white 60%, transparent);
            background: color-mix(in srgb, white 0%, transparent);

            &:hover, &:focus {
                background: color-mix(in srgb, white 12%, transparent);
                color: white;
            }

            &:active {
                background: rgba(255, 255, 255, 0.06);
            }
        }
    }

    &.disabled {
        cursor: default;
        background: transparent;
        outline: 1px solid rgba(255, 255, 255, 0.1);
        outline-offset: 1px;
        color: color-mix(in srgb, white 30%, transparent);
    }
}
</style>