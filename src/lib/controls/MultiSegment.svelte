<script lang="ts">
import Segment from "$lib/controls/Segment.svelte"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import Inside from "./Inside.svelte"
import ClickoutRegion from "./ClickoutRegion.svelte"
import Options from "./Options.svelte"
import Dropdown from "./Dropdown.svelte"
import Search from "./Search.svelte"

import type { IconComponent } from "$lib/utils/icon_type"
import FlexWrap from "$lib/display/FlexWrap.svelte"

type $$Generic = T
type T = $$Generic

// Workaround for https://github.com/sveltejs/svelte/issues/7830
// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface $$Slots {
    default: { search: string, option: T }
}

export let name: string
export let values: T[]
export let options: T[] | ((query: string) => T[])
export let search_placeholder = "Search..."
export let left_icon: IconComponent | undefined = undefined
export let allow_other: ((query: string) => T) | undefined = undefined
export let get_title: (value: T) => string = value => value as unknown as string
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
        <FlexWrap>
            {#each values as value}
                <Segment
                    left_icon={left_icon}
                    right_icon={CloseCircle}
                    text={get_title(value)}
                    on:click={ () => remove_value(value) }/>
            {/each}
            <Inside>
                <Segment
                    left_icon={dropdown_toggled ? CloseCircle : Plus}
                    on:click={ () => dropdown_toggled = !dropdown_toggled }/>
                {#if dropdown_toggled}
                    <Dropdown>
                        {#if typeof options === "function"}
                            <Search
                                placeholder={search_placeholder}
                                bind:search/>
                        {/if}
                        <Options
                            allow_other={allow_other}
                            options={available_options}
                            bind:search
                            on:select={ option => {
                                values = [...values, option.detail]
                                search = "" // Clear search
                            } }
                            let:option>
                            <Segment
                                left_icon={left_icon}
                                tabindex={-1}
                                text={get_title(option)}/>
                            <slot
                                option={option}
                                search={search}/>
                        </Options>
                    </Dropdown>
                {/if}
            </Inside>
        </FlexWrap>
    </ClickoutRegion>
</InputWrapper>