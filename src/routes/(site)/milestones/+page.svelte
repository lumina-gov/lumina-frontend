<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import { milestones } from "$lib//data/milestones"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
import HammerScrewdriver from "svelte-material-icons/HammerScrewdriver.svelte";
import MilestoneItem from "./MilestoneItem.svelte"
import Segment from "$lib/controls/Segment.svelte";
import FlexWrap from "$lib/display/FlexWrap.svelte";
import type { Milestone } from "$lib/data/milestones";
    import FilterSegment from "./FilterSegment.svelte";
let filter : string | undefined
$: filtered_milestones = filter_milestones();
function filter_milestones() : Milestone[]{
    if (typeof filter === "undefined") {
        return milestones
    }else {
        return  milestones.filter(milestone => milestone.tags.includes(filter!));
    }
    
}
</script>

<Hero
    gap={40}
    max_width="600px"
>
    <VerticalLayout
        align_items="flex-start"
        max_width="600px"
    >
        <Tag>OUR HISTORY</Tag>
        <Heading left_icon={RocketLaunch}>
            MILESTONES
        </Heading>
        <Paragraph>
            View the milestones and history of the development of Lumina
            leading up to where we are today.
        </Paragraph>
        <Paragraph>
            Learn about the key contributors and pioneers moving Lumina
            twoards fulfilling its vision of creating  a free and directly
            democratic city-state.
        </Paragraph>
    </VerticalLayout>
    <FlexWrap><Segment style={filter === undefined ? "branded" : "translucent"} on:click={() => {
        filter = undefined;
    }}>All</Segment>
    <FilterSegment filter_name="Service" filter={filter} icon={HammerScrewdriver}/>  
</FlexWrap>

    <VerticalLayout max_width={850} vertical_padding={0} gap={0}>
        {#each filtered_milestones as milestone , milestone_index}
            <MilestoneItem last={milestones.length - 1 == milestone_index} milestone={milestone}/>
        {/each}
    </VerticalLayout>
</Hero>