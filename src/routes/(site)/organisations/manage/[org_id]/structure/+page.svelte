<script lang="ts">
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import type { Prop } from "$lib/utils/typed_props"
import type Component from "./Component.svelte"
import OrgChart from "./OrgChart.svelte"


let components: Record<string, Prop<Component, "component">> = {}

let root: string | null = null

</script>
<Grid
    flex="1"
    padding_vertical={80}>
    <GridItem
        columns={{
            laptop: "span 16",
            tablet: "span 8",
            mobile: "span 4"
        }}
        position="relative">
        <OrgChart
            bind:components
            bind:root />
    </GridItem>
</Grid>
<style lang="stylus">
@import "variables"



</style>
