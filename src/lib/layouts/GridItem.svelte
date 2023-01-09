<script lang="ts">

type BreakpointColumns<T = string> = {
    "mobile"?: T,
    "tablet"?: T,
    "laptop"?: T,
}

type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "normal"
type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "normal"
type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse" | "normal"

export let padding: string | undefined = undefined
export let gap: number | undefined = undefined
export let tag = "div"
export let position: "relative" | "absolute" | "fixed" | "sticky" | "static" | "inherit" | "initial" | "unset" | undefined = undefined

export let flex_direction: FlexDirection | BreakpointColumns<FlexDirection> | undefined = "column"
export let justify_content: JustifyContent | BreakpointColumns<JustifyContent> | undefined = undefined
export let align_items: AlignItems | BreakpointColumns<AlignItems> | undefined = undefined
export let text_align: "left" | "center" | "right" | undefined = undefined

export let columns: BreakpointColumns<string>

$: styles = {
    "--mobile-columns": columns.mobile,
    "--tablet-columns": columns.tablet,
    "--laptop-columns": columns.laptop,
    "--mobile-align-items": typeof align_items == "object" && "mobile" in align_items ? align_items.mobile : undefined,
    "--tablet-align-items": typeof align_items == "object"  && "tablet" in align_items ? align_items.tablet : undefined,
    "--laptop-align-items": typeof align_items == "object"  && "laptop" in align_items ? align_items.laptop : undefined,
    "--mobile-justify-content": typeof justify_content == "object"  && "mobile" in justify_content ? justify_content.mobile : undefined,
    "--tablet-justify-content": typeof justify_content == "object"  && "tablet" in justify_content ? justify_content.tablet : undefined,
    "--laptop-justify-content": typeof justify_content == "object"  && "laptop" in justify_content ? justify_content.laptop : undefined,
    "--mobile-flex-direction": typeof flex_direction == "object"  && "mobile" in flex_direction ? flex_direction.mobile : undefined,
    "--tablet-flex-direction": typeof flex_direction == "object"  && "tablet" in flex_direction ? flex_direction.tablet : undefined,
    "--laptop-flex-direction": typeof flex_direction == "object"  && "laptop" in flex_direction ? flex_direction.laptop : undefined,
    "align-items": typeof align_items == "string" ? align_items : undefined,
    "justify-content": typeof justify_content == "string" ? justify_content : undefined,
    "flex-direction": typeof flex_direction == "string" ? flex_direction : undefined,
    "text-align": text_align,
    "padding": padding,
    "gap": gap ? gap + "px" : undefined,
    "Position": position,
}


$: styles_string = Object.entries(styles)
    .filter(([_key, value]) => typeof value !== "undefined")
    .map(([key, value]) => key + ":" + value)
    .join(";")

</script>
<svelte:element
    this={ tag }
    style={styles_string}
    class="grid-item">
    <slot/>
</svelte:element>
<style lang="stylus">
@import "variables"

.grid-item
    display flex
    width 100%
    grid-column var(--laptop-columns)
    justify-content var(--laptop-justify-content)
    align-items var(--laptop-align-items)
    flex-direction var(--laptop-flex-direction)
    @media (max-width $tablet)
        grid-column var(--tablet-columns)
        justify-content var(--tablet-justify-content)
        align-items var(--tablet-align-items)
        flex-direction var(--tablet-flex-direction)
    @media (max-width $mobile)
        grid-column var(--mobile-columns)
        justify-content var(--mobile-justify-content)
        align-items var(--mobile-align-items)
        flex-direction var(--mobile-flex-direction)
</style>