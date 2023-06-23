<script lang="ts">
import { countries } from "$lib/data/countries"
import Dropdown from "../Dropdown.svelte"
import Country from "./Country.svelte"
import type { Country as CountryType} from "$lib/data/countries"
import ChevronDown from "svelte-material-icons/ChevronDown.svelte"
import Options from "../Options.svelte"
import Search from "../Search.svelte"
import ClickoutRegion from "../ClickoutRegion.svelte"
import Inside from "../Inside.svelte"

import InputWrapper from "$lib/display/InputWrapper.svelte"
import { tick } from "svelte"
export let name = "Phone Number"

export let value: { country: CountryType | null, number: string }
export let autocomplete = "tel"
export let placeholder = "Phone Number"
let input_ref: HTMLInputElement
let open = false
let search = ""

$: regex = new RegExp(search, "i")
$: filtered = countries.filter(country => regex.test(country.name) || regex.test(country.code) || regex.test(country.calling_code))

let options: Options<CountryType>
let search_component: Search
</script>
<InputWrapper {name}>
    <ClickoutRegion clicked_outside={() => open = false}>
        <div class="input-wrapper">
            <Inside>
                <div
                    class="country-selector"
                    role="button"
                    tabindex="0"
                    on:keypress={ event => {
                        if (event.key === "Enter") {
                            open = !open
                            tick().then(() => search_component.focus())
                        }
                    } }
                    on:click={ () => open = !open }>
                    <div class="country-data">
                        <div class="country-data-flag">
                            <div
                                class="iti-flag {value.country?.code.toLowerCase() || ""}"
                                class:flag={ value.country }/>
                        </div>
                        <div
                            class="country-data-label"
                            class:placeholder={ !value.country }>{ value.country?.calling_code || "+0" }</div>
                    </div>
                    <ChevronDown size={20}/>
                </div>
                {#if open}
                    <Dropdown>
                        <Search
                            bind:this={ search_component }
                            bind:search
                            on:keyup={ e => { if (e.key === "ArrowDown") options.focus() } }/>
                        <Options
                            bind:this={ options }
                            options={filtered}
                            on:keyup={ e => { if (e.detail.key === "ArrowUp") search_component.focus() } }
                            on:select={ e => {
                                value.country = e.detail
                                open = false
                            } }
                            let:option>
                            <Country
                                country={option}
                                selected={value.country}/>
                        </Options>
                    </Dropdown>
                {/if}
            </Inside>
            <div
                class="input-pseudo-wrapper"
                on:keypress={ event => {
                    if (event.key === "Enter") {
                        input_ref.focus()
                    }
                } }
                on:click={ () => input_ref.focus() }>
                <input
                    bind:this={ input_ref }
                    name={autocomplete}
                    {autocomplete}
                    {placeholder}
                    on:keyup
                    on:keydown
                    on:keyup
                    bind:value={ value.number }/>
            </div>
        </div>
    </ClickoutRegion>
</InputWrapper>
<style lang="stylus">
@import variables

.input-wrapper
    display flex
    align-items center

.input-pseudo-wrapper
    flex 1
    display flex
    align-items center
    background transparify(white, 10%)
    border-top-right-radius 4px
    border-bottom-right-radius 4px

input
    appearance none
    border none
    outline none
    background none
    color inherit
    line-height 1
    flex 1
    width 100%
    font-size 16px
    padding 12px 16px
    padding-left 6px
    margin 0
    &::placeholder
        color white
        opacity 0.3

.country-selector
    border-top-left-radius 4px
    margin-right 1px
    border-bottom-left-radius 4px
    display flex
    align-items center
    padding-left 6px
    height 48px
    background transparify(white, 10%)
    &:focus, &:hover
        outline none
        cursor pointer
        background transparify(white, 15%)
    .country-data
        display flex
        align-items center
        .country-data-label
            font-size 16px
            padding-left 5px
            padding-right 5px
            flex 1
            &.placeholder
                opacity 0.5

    .country-title
        font-size 13px
        text-transform uppercase
        font-weight 500
        color transparify(white, 80%)

:global
    @import "flags"

    .iti-flag.flag
        background-image url("/flags.png")
        image-rendering pixelated


    .country-data-flag
        outline: 1px solid transparent
        transform scale(0.7)

</style>