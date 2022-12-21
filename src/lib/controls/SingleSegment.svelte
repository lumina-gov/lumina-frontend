<script lang="ts">
import Segment from "$lib/controls/Segment.svelte"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import Inside from "./Inside.svelte"
import ClickoutRegion from "./ClickoutRegion.svelte"
import type { SvelteComponent } from "svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import Options from "./Options.svelte"
import Dropdown from "./Dropdown.svelte"
import Search from "./Search.svelte"

type T = $$Generic

export let name: string
export let value: T | null = null
export let get_title: (value: T) => string
export let allow_other: ((query: string) => T) | undefined = undefined

export let placeholder = "Select an option"
export let options: T[] | ((query: string) => T[])
export let right_icon: typeof SvelteComponent

let search = ""

$: available_options = (typeof options === "function" ? options(search) : options).filter(option => option !== value)

function select_option(option: T) {
    value = option
    dropdown_toggled = false
}

let dropdown_toggled = false
</script>
<InputWrapper bind:name>
    <div class="tag">
        <Segment
            on:click={() => dropdown_toggled = !dropdown_toggled}
            right_icon={value ? right_icon : Plus}
            text={value ? get_title(value)  : placeholder}/>
        {#if dropdown_toggled}
            <ClickoutRegion clicked_outside={() => dropdown_toggled = false}>
                <Inside>
                    <Dropdown>
                        {#if typeof options === "function"}
                            <Search bind:search/>
                        {/if}
                        <Options
                            on:select={e => select_option(e.detail)}
                            options={available_options}
                            display_no_more_options={!(typeof allow_other === "function" && search)}
                            let:option>
                            <slot {option}>
                                <Segment text={get_title(option)}/>
                            </slot>
                            <slot name="option" {option}/>
                            <svelte:fragment slot="other">
                                {#if typeof allow_other === "function" && search}
                                    <div class="other-option" on:click={() => {
                                            if (typeof allow_other === "function") {
                                                value = allow_other(search)
                                                search = ""
                                            }
                                        }}>
                                        Use "<strong>{search}</strong>"
                                    </div>
                                {/if}
                            </svelte:fragment>
                        </Options>
                    </Dropdown>
                </Inside>
            </ClickoutRegion>
        {/if}
    </div>
</InputWrapper>
<style lang="stylus">
@import "variables"

.tag
    display flex

</style>