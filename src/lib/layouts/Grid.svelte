<script lang="ts">

export let padding_vertical: string | undefined = undefined
export let vertical_gap: number | undefined = undefined

export let columns: {
    "mobile": number,
    "tablet": number,
    "laptop": number,
} = {
    "mobile": 4,
    "tablet": 8,
    "laptop": 12,
}

export let side_padding = true

let styles = {
    "--mobile-columns": columns.mobile,
    "--tablet-columns": columns.tablet,
    "--laptop-columns": columns.laptop,
    "padding-top": padding_vertical,
    "padding-bottom": padding_vertical,
    "grid-row-gap": vertical_gap ? `${vertical_gap}px` : undefined,
}

$: filtered_styles = Object.entries(styles).filter(([_key, value]) => value !== undefined).map(([key, value]) => `${key}: ${value}`).join(";")

</script>
<div
    class="grid"
    class:side_padding
    style={filtered_styles}>
    <slot/>
</div>
<style lang="stylus">
@import "variables"

.grid
    &.side_padding
        padding 0 16px
    display grid
    max-width $laptop
    margin 0 auto
    gap 16px
    width 100%
    grid-template-columns repeat(var(--laptop-columns), 1fr)
    @media (max-width $tablet)
        grid-template-columns repeat(var(--tablet-columns), 1fr)
    @media (max-width $mobile)
        grid-template-columns repeat(var(--mobile-columns), 1fr)
</style>