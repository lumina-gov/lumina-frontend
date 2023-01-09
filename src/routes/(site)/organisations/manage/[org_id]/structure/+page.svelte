<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import type { Prop } from "$lib/utils/typed_props"
import Sitemap from "svelte-material-icons/Sitemap.svelte"
import type Component from "./Component.svelte"
import ComponentEditor from "./ComponentEditor.svelte"
import OrgChart from "./OrgChart.svelte"


let components: Record<string, Prop<Component, "component">> = {}
let active_component_id: string | null = null
let root: string | null = null

</script>
<VerticalLayout
    flex="1"
    gap={40}
    vertical_padding={16}>
    <Grid>
        <GridItem
            columns={{
                laptop: "1 / span 10",
                tablet: "span 4",
                mobile: "span 4"
            }}
            gap={16}>
            <Heading left_icon={Sitemap}>
                Organisation Structure
            </Heading>
            <Paragraph>
                Edit the structure of your organisation with our visual editor.
            </Paragraph>
        </GridItem>
    </Grid>
    <Grid flex="1">
        <GridItem
            columns={{
                laptop: "1 / span 10",
                tablet: "span 8",
                mobile: "span 4"
            }}
            position="relative">
            <OrgChart
                bind:active_component_id
                bind:components
                bind:root />
        </GridItem>
        <GridItem
            columns={{
                laptop: "span 6",
                tablet: "span 4",
                mobile: "span 4"
            }}
            position="relative">
            <ComponentEditor
                bind:active_component_id
                bind:components />
        </GridItem>
    </Grid>
</VerticalLayout>

<style lang="stylus">
@import "variables"



</style>
