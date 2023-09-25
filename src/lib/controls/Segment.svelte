<script lang="ts">
import { createEventDispatcher } from "svelte"
import type { IconComponent } from "$lib/utils/icon_type"

let dispatch = createEventDispatcher()

export let href: string | undefined = undefined
export let left_icon: IconComponent | undefined = undefined
export let right_icon: IconComponent | undefined = undefined
export let right_icon_opacity = 0.5
export let left_icon_opacity = 0.5
export let text_opacity = 1
export let tabindex: number | undefined = undefined
export let style: "translucent" | "branded" = "translucent"
export let disabled = false
export let text: string | undefined = undefined

function click(e: MouseEvent | KeyboardEvent) {
    if (!disabled) {
        dispatch("click", e)
    }
}

function handle_keyup(e: KeyboardEvent) {
    if (e.key === "Enter") {
        click(e)
    }
}

$: tag = href ? "a" : "div" as "a" | "div"
</script>

<svelte:element
    this={ tag }
    class="segment {style}"
    class:disabled
    href={href}
    role="button"
    tabindex={tabindex ?? disabled ? -1 : 0}
    on:click={ click }
    on:keyup={ handle_keyup }
>
    {#if left_icon}
        <span
            style:opacity={ left_icon_opacity }
            class="icon">
            <svelte:component this={ left_icon } />
        </span>
    {/if}
    {#if text || $$slots.default}
        <div
            style:opacity={ text_opacity }
            class="text">
            {#if text}
                { text }
            {:else}
                <slot/>
            {/if}
        </div>
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
.segment {
    padding: 6px;
    background: rgba(255, 255, 255, 0.06);
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    &:focus-visible {
        outline: 2px solid var(--brand);
        outline-offset: 2px;
    }

    &.branded {
        background: var(--brand);
        &:hover {
            background: color-mix(in srgb, var(--brand), white 12%);
        }
    }

    &.disabled {
        cursor: default;
        opacity: 0.5;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    & .text {
        padding: 2px 6px;
        line-height: 100%;
    }
    & .icon {
        font-size: 20px;
        display: inline-flex;
    }
}
</style>
