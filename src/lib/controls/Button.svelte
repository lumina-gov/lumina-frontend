<script lang="ts">
import type { SvelteComponent } from "svelte"
import { createEventDispatcher } from "svelte"

export let href: string | null = null
export let left_icon: typeof SvelteComponent | null = null
export let right_icon: typeof SvelteComponent | null = null
export let style: "translucent" | "transparent" | "branded" = "branded"
export let hug = true
export let disabled = false
export let text: string | null = null

$: tag = href ? "a" : "div" as "a" | "div"

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

<style lang="stylus">
@import 'variables'

.button
    padding 10px 10px
    color white
    display inline-flex
    align-items: center
    white-space nowrap
    justify-content: center
    border-radius 4px
    width 100%
    cursor pointer
    font-weight 600
    .text
        padding 0px 12px
    &.hug
        width auto
    .icon
        font-size: 20px
        display: inline-flex
    &:not(.disabled)
        &:focus-visible
            outline-effect()
        &.branded
            background: $brand
            &:hover, &:focus
                background: lighten($brand, 12%)
            &:active
                background $brand
        &.translucent
            background transparify(white, 8%)
            &:hover, &:focus
                background: transparify(white, 14%)
            &:active
                background: transparify(white, 8%)
        &.transparent
            color transparify(white, 60%)
            background transparify(white, 0%)
            &:hover, &:focus
                background: transparify(white, 12%)
                color white
            &:active
                background: transparify(white, 6%)
    &.disabled
        cursor default
        background transparent
        outline 1px solid transparify(white, 10%)
        outline-offset 1px
        color transparify(white, 30%)


</style>