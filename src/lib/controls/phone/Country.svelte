<script lang="ts">
import type { Country } from "$lib/data/countries"

export let selected: Country | null
export let country: Country
</script>
<div
    class="country"
    class:selected={ selected && selected.code === country.code }>
    <div class="country-data-flag">
        <div class="iti-flag flag {country.code.toLowerCase()}"/>
    </div>
    <div class="country-name">{ country.name }</div>
    <div class="country-code">{ country.calling_code }</div>
</div>
<style>
.country {
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    grid-gap: 8px;
    align-items: center;
    height: 32px;
    cursor: pointer;
    & .country-name {
        font-weight: 600;
        font-size: 12px;
    }
    & .country-code {
        font-size: 17px;
    }
}
</style>