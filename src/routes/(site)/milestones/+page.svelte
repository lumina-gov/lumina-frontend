<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import { milestones } from "$lib//data/milestones"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import RocketLaunch from "svelte-material-icons/RocketLaunch.svelte"
import MilestoneItem from "./MilestoneItem.svelte"
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

    <VerticalLayout>
        {#each milestones as milestone}
            <MilestoneItem milestone={milestone}/>
        {/each}
    </VerticalLayout>
</Hero>