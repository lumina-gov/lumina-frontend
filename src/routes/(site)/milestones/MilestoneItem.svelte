<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import type {Milestone} from "$lib/data/milestones"
import Heading from "$lib/display/Heading.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import HammerScrewdriver from "svelte-material-icons/HammerScrewdriver.svelte"
import ContributorItem from "./ContributorItem.svelte"
export let milestone : Milestone
</script>

<Card>
    <VerticalLayout max_width="639px">
        <Heading
            left_icon={milestone.icon}
            level={2}>{ milestone.title }</Heading>
        <Paragraph>
            { milestone.description }
        </Paragraph>

        <Heading
            left_icon={HammerScrewdriver}
            level={3} >CONTRIBUTIONS</Heading>
        {#each milestone.contributors as contributor}
            <ContributorItem contributor={contributor}></ContributorItem>
        {/each}
        <br>
    </VerticalLayout>
    
</Card>

