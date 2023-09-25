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

</script>
<svelte:element
    this={ tag }
    style:--mobile-columns={ columns.mobile }
    style:--tablet-columns={ columns.tablet }
    style:--laptop-columns={ columns.laptop }
    style:--mobile-align-items={ typeof align_items == "object" && "mobile" in align_items ? align_items.mobile : undefined }
    style:--tablet-align-items={ typeof align_items == "object"  && "tablet" in align_items ? align_items.tablet : undefined }
    style:--laptop-align-items={ typeof align_items == "object"  && "laptop" in align_items ? align_items.laptop : undefined }
    style:--mobile-justify-content={ typeof justify_content == "object"  && "mobile" in justify_content ? justify_content.mobile : undefined }
    style:--tablet-justify-content={ typeof justify_content == "object"  && "tablet" in justify_content ? justify_content.tablet : undefined }
    style:--laptop-justify-content={ typeof justify_content == "object"  && "laptop" in justify_content ? justify_content.laptop : undefined }
    style:--mobile-flex-direction={ typeof flex_direction == "object"  && "mobile" in flex_direction ? flex_direction.mobile : undefined }
    style:--tablet-flex-direction={ typeof flex_direction == "object"  && "tablet" in flex_direction ? flex_direction.tablet : undefined }
    style:--laptop-flex-direction={ typeof flex_direction == "object"  && "laptop" in flex_direction ? flex_direction.laptop : undefined }
    style:align-items={ typeof align_items == "string" ? align_items : undefined }
    style:justify-content={ typeof justify_content == "string" ? justify_content : undefined }
    style:flex-direction={ typeof flex_direction == "string" ? flex_direction : undefined }
    style:text-align={ text_align }
    style:padding
    style:gap={ gap ? gap + "px" : undefined }
    style:position
    class="grid-item">
    <slot/>
</svelte:element>
<style>
.grid-item {
    display: flex;
    width: 100%;
    grid-column: var(--laptop-columns);
    justify-content: var(--laptop-justify-content);
    align-items: var(--laptop-align-items);
    flex-direction: var(--laptop-flex-direction);
}
@media (max-width: 900px) {
    .grid-item {
        grid-column: var(--tablet-columns);
        justify-content: var(--tablet-justify-content);
        align-items: var(--tablet-align-items);
        flex-direction: var(--tablet-flex-direction);
    }
}
@media (max-width: 600px) {
    .grid-item {
        grid-column: var(--mobile-columns);
        justify-content: var(--mobile-justify-content);
        align-items: var(--mobile-align-items);
        flex-direction: var(--mobile-flex-direction);
    }
}
</style>