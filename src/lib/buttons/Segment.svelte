<script lang="ts">
import { createEventDispatcher, SvelteComponent } from "svelte"

let dispatch = createEventDispatcher()

export let href: string | undefined = undefined
export let left_icon: typeof SvelteComponent | undefined = undefined
export let right_icon: typeof SvelteComponent | undefined = undefined
export let right_icon_opacity = 0.5
export let left_icon_opacity = 0.5
export let text_opacity = 1
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

$: tag = href ? "a" : "div"
</script>

<svelte:element
    this={tag}
    href={href}
    on:click={click}
    on:keyup={handle_keyup}
    role="button"
    class:disabled
    tabindex={disabled ? -1 : 0}
    class="segment {style}"
>
    {#if left_icon}
        <span class="icon" style="opacity: {left_icon_opacity};">
            <svelte:component this={left_icon} />
        </span>
    {/if}
    {#if text || $$slots.default}
        <div class="text" style="opacity: {text_opacity};">
            {#if text}
                {text}
            {:else}
                <slot/>
            {/if}
        </div>
    {/if}
    {#if right_icon}
        <span class="icon" style="opacity: {right_icon_opacity};">
            <svelte:component this={right_icon} />
        </span>
    {/if}
</svelte:element>

<style lang="stylus">
@import 'variables'

.segment
    padding 6px
    background transparify(white, 6%)
    color white
    display inline-flex
    align-items center
    justify-content center
    border-radius 50px
    cursor pointer
    font-weight 500
    .text
        padding 2px 6px
        line-height 100%
    .icon
        font-size: 20px
        display: inline-flex
    &:hover
        background transparify(white, 10%)
    &:focus-visible
        outline $brand 2px dashed
        outline-offset 2px
    &.branded
        background $brand
        &:hover
            background lighten($brand, 12%)
    &.disabled
        cursor default
        opacity 0.5
        background transparent
        border 1px solid transparify(white, 10%)
</style>
