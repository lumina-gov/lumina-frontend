<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import { Filter} from "$lib//data/milestones"
import { milestones } from "$lib//data/milestones"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
import HammerScrewdriver from "svelte-material-icons/HammerScrewdriver.svelte"
import MilestoneItem from "./MilestoneItem.svelte"
import Segment from "$lib/controls/Segment.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import Handshake from "svelte-material-icons/Handshake.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import Brain from "svelte-material-icons/Brain.svelte"

let filter : Filter | null = null

$: filtered_milestones = filter ? milestones.filter(milestone => milestone.tags.find(tag => tag === filter)) : milestones

const icons = {
    [Filter.Partnership]: Handshake,
    [Filter.Service]: HammerScrewdriver,
    [Filter.Social]: AccountGroup,
    [Filter.Technological]: Brain,
}

</script>

<Hero gap={40}>
    <VerticalLayout
        align_items="flex-start"
        max_width="600px">
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
    <FlexWrap>
        <Segment
            style={filter === null ? "branded" : "translucent"}
            on:click={ () => filter = null }>All</Segment>
        {#each Object.values(Filter) as filter_item}
            <Segment
                style={filter === filter_item ? "branded" : "translucent"}
                left_icon={icons[filter_item]}
                on:click={ () => filter = filter_item }>
                { filter_item }
            </Segment>
        {/each}
    </FlexWrap>

    <VerticalLayout
        gap={0}
        max_width={850}
        vertical_padding={0}>
        {#each filtered_milestones as milestone , milestone_index}
            <MilestoneItem
                last={milestones.length - 1 == milestone_index}
                milestone={milestone}/>
        {/each}
    </VerticalLayout>
</Hero>
