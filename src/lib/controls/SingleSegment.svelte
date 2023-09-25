<script lang="ts">
import type { IconComponent } from "$lib/utils/icon_type"

import Segment from "$lib/controls/Segment.svelte"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import Inside from "./Inside.svelte"
import ClickoutRegion from "./ClickoutRegion.svelte"
import Options from "./Options.svelte"
import Dropdown from "./Dropdown.svelte"
import Search from "./Search.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import MenuDown from "svelte-material-icons/MenuDown.svelte"
import CloseCircle from "svelte-material-icons/CloseCircle.svelte"
import Icon from "$lib/display/Icon.svelte"
import { createEventDispatcher } from "svelte"

type $$Generic = T
type T = $$Generic

const dispatch = createEventDispatcher<{ select: T | null }>()

export let name: string | undefined = undefined
export let value: T | null = null
export let get_title: (value: T) => string = value => value as unknown as string
export let get_icon: (value: T) => IconComponent | undefined = () => left_icon
export let allow_other: ((query: string) => T) | undefined = undefined
export let allow_null = false

export let placeholder = "Select an option"
export let options: T[] | ((query: string) => T[])
export let right_icon: IconComponent = MenuDown
export let left_icon: IconComponent | undefined = undefined

let search = ""

$: available_options = [...(typeof options === "function" ? options(search) : options).filter(option => option !== value)]

function select_option(option: T | null) {
    value = option
    dropdown_toggled = false
    dispatch("select", option)
}

let dropdown_toggled = false
</script>
<InputWrapper bind:name>
    <FlexWrap>
        <ClickoutRegion clicked_outside={() => dropdown_toggled = false}>
            <Inside>
                <Segment
                    left_icon={left_icon}
                    right_icon={right_icon}
                    text={value ? get_title(value)  : placeholder}
                    on:click={ () => dropdown_toggled = !dropdown_toggled }/>
            </Inside>
            {#if dropdown_toggled}
                <Inside>
                    <Dropdown>
                        {#if allow_null && value}
                            <div
                                class="null"
                                role="button"
                                tabindex="0"
                                on:keypress={ e => e.key === "Enter" && select_option(null) }
                                on:click={ () => select_option(null) }>
                                Remove { placeholder }
                                <Icon
                                    --color="var(--red)"
                                    icon={CloseCircle}/>
                            </div>
                        {/if}
                        {#if typeof options === "function"}
                            <Search bind:search/>
                        {/if}
                        <Options
                            allow_other={allow_other}
                            options={available_options}
                            on:select={ e => select_option(e.detail) }
                            let:option>
                            <Segment
                                left_icon={get_icon(option)}
                                tabindex={-1}
                                text={get_title(option)}/>
                            <slot
                                {option}
                                {search}/>
                        </Options>
                    </Dropdown>
                </Inside>
            {/if}
        </ClickoutRegion>
    </FlexWrap>
</InputWrapper>
<style>
.null {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 12px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    gap: 8px;
    &:is(:focus, :hover, :focus-within) {
        background: rgba(255, 255, 255, 0.1);
        outline: none;
    }
}
</style>