<script lang="ts">
import type { SvelteComponent } from "svelte"
import { onMount } from "svelte"
import InputWrapper from "../display/InputWrapper.svelte"
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher<{input: string}>()

export let name: string
export let placeholder = ""
export let type = ""
export let left_icon: typeof SvelteComponent | null = null
export let right_icon: typeof SvelteComponent | null = null
export let left_icon_handler: ((e: Event) => void) | undefined = undefined
export let right_icon_handler: ((e: Event) => void) | undefined = undefined
export let focus_on_mount = false
export let value: string
export let autocomplete: string | undefined = undefined

export let input_ref: HTMLInputElement | null = null

function handle_icon_click(e: Event, handler: ((e: Event) => void) | undefined) {
    if (handler) {
        e.stopPropagation()
        handler(e)
    }
}

onMount(() => {
    if (focus_on_mount && input_ref) {
        input_ref.focus()
    }
})
</script>
<InputWrapper
    bind:name
    on:click={ () => input_ref && input_ref.focus() }>
    <div class="input-pseudo-wrapper">
        {#if left_icon}
            <div
                class="icon"
                class:clickable={ !!left_icon_handler }
                role="button"
                tabindex={left_icon_handler ? 0 : undefined}
                on:keypress={ e => {
                    if (e.key === "Enter") {
                        handle_icon_click(e, left_icon_handler)
                    }
                } }
                on:click={ e => handle_icon_click(e, left_icon_handler) }>
                <svelte:component this={ left_icon } />
            </div>
        {/if}
        <input
            bind:this={ input_ref }
            name={autocomplete}
            {autocomplete}
            {placeholder}
            {type}
            {value}
            on:keyup
            on:keydown
            on:input={ event => (value = event.currentTarget.value) }
            on:input={ event => dispatch("input", event.currentTarget.value) }
        />
        {#if right_icon}
            <div
                class="icon"
                class:clickable={ !!right_icon_handler }
                role="button"
                tabindex={right_icon_handler ? 0 : undefined}
                on:keypress={ e => {
                    if (e.key === "Enter") {
                        handle_icon_click(e, right_icon_handler)
                    }
                } }
                on:click={ e => handle_icon_click(e, right_icon_handler) }>
                <svelte:component this={ right_icon } />
            </div>
        {/if}
    </div>
    <slot/>
</InputWrapper>

<style lang="stylus">
@import variables

.clickable
    cursor pointer
    border-radius 50px
    &:hover
        background transparify(white, 6%)
    &:active
        background transparify(white, 12%)

input
    appearance none
    border none
    outline none
    background none
    color inherit
    line-height normal
    flex 1
    width 100%
    padding 12px 16px
    font-size 16px
    padding-left 6px
    margin 0
    &::placeholder
        color white
        opacity 0.3

.input-pseudo-wrapper
    padding 0 6px
    border-radius 4px
    align-items center
    cursor text
    display flex
    background rgba(255,255,255,0.1)

.icon
    font-size 20px
    padding 6px
    display inline-flex
    align-items center
    color rgba(255, 255, 255, 0.5)

</style>
