<script lang="ts">
import Segment from "$lib/buttons/Segment.svelte"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import Inside from "./Inside.svelte"
import ClickoutRegion from "./ClickoutRegion.svelte"
import Options from "./Options.svelte"
import Dropdown from "./Dropdown.svelte"
import Search from "./Search.svelte"

type T = $$Generic

// Workaround for https://github.com/sveltejs/svelte/issues/7830
interface $$Slots {
    default: { search: string }
    selected: { value: T }
    option: { option: T }
}

export let name: string
export let values: T[]
export let options: T[] | ((query: string) => T[])
export let search_placeholder = "Search..."
export let allow_other: ((query: string) => T) | undefined = undefined
let search = ""

$: available_options = (typeof options === "function" ? options(search) : options)
    .filter(option => !values.some(val => val === option))

function remove_value(value: T) {
    values = values.filter(item => item !== value)
}

let dropdown_toggled = false
</script>
<InputWrapper bind:name>
    <ClickoutRegion clicked_outside={() => dropdown_toggled = false}>
        <div class="tags">
            <slot {search}/>
            {#each values as value}
                <div on:click={() => remove_value(value)} class="selected-option">
                    <slot
                        name="selected"
                        {value}>
                        No slot content
                    </slot>
                </div>
            {/each}
            <Inside>
                <Segment
                    left_icon={dropdown_toggled ? CloseCircle : Plus}
                    on:click={() => dropdown_toggled = !dropdown_toggled}/>
                {#if dropdown_toggled}
                    <Dropdown>
                        {#if typeof options === "function"}
                            <Search bind:search placeholder={search_placeholder}/>
                        {/if}
                        <Options
                            options={available_options}
                            on:select={option => {
                                values = [...values, option.detail]
                                search = "" // Clear search
                            }}
                            display_no_more_options={!(typeof allow_other === "function" && search)}
                            let:option>
                            <slot name="option" {option}/>
                            <svelte:fragment slot="other">
                                {#if typeof allow_other === "function" && search}
                                    <div class="other-option" on:click={() => {
                                            if (typeof allow_other === "function") {
                                                values = [...values, allow_other(search)]
                                                search = ""
                                            }
                                        }}>
                                        Use "<strong>{search}</strong>"
                                    </div>
                                {/if}
                            </svelte:fragment>
                        </Options>

                    </Dropdown>
                {/if}
            </Inside>
        </div>
    </ClickoutRegion>
</InputWrapper>
<style lang="stylus">
@import "variables"

.selected-option
    display contents

.other-option
    padding 16px 16px
    border-bottom 1px solid transparify(white, 6%)
    cursor pointer
    font-size 16px
    color transparify(white, 50%)
    &:last-child
        border-bottom none
    strong
        color white

    font-weight 500
    border-radius 4px

.tags
    display flex
    gap 8px
    flex-wrap wrap


</style>