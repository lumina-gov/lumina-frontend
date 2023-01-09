
<script lang="ts">
import { createEventDispatcher, SvelteComponent } from "svelte"

export let href: string | null = null
export let left_icon: typeof SvelteComponent | null = null
export let left_icon_props: Record<string, any> = {}
export let right_icon: typeof SvelteComponent | null = null
export let style: "translucent" | "transparent" | "branded" = "transparent"
export let authenticated_app_bar = false
export let active = false
$: tag = href ? "a" : "div"

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
    class:authenticated_app_bar
    class:branded={ style === "branded" }
    class:translucent={ style === "translucent" }
    class:transparent={ style === "transparent" }
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
    width auto
    cursor pointer
    font-weight 600
    @media (max-width $tablet)
        &.authenticated_app_bar
            width 100%
            height 100%
    .text
        padding 0px 12px
    .icon
        font-size: 20px
        display: inline-flex
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

</style>
