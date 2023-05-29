<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import type { Milestone } from "$lib/data/milestones"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import HammerScrewdriver from "svelte-material-icons/HammerScrewdriver.svelte"
import ContributorItem from "./ContributorItem.svelte"
import MilestoneDate from "./MilestoneDate.svelte"
export let milestone: Milestone
export let last: boolean
</script>

<div class="milestone">
    <div class="dates">
        <MilestoneDate date={milestone.date}></MilestoneDate>
        {#each milestone.tags as tag}
            <Tag>{ tag }</Tag>
        {/each}
    </div>
    <div
        class="line"
        class:last-line={ last }>
        <div class="circle" />
    </div>
    <div class="milestone_card">
        <Card padding="24px">
            <VerticalLayout max_width="639px">
                <Heading
                    left_icon={milestone.icon}
                    level={2}>
                    { milestone.title }
                </Heading>
                <Paragraph>
                    { milestone.description }
                </Paragraph>
                <Heading
                    left_icon={HammerScrewdriver}
                    level={4}>
                    CONTRIBUTORS
                </Heading>
                <div class="milestones">
                    {#each milestone.contributors as contributor}
                        <ContributorItem {contributor} />
                    {/each}
                </div>
            </VerticalLayout>
        </Card>
    </div>
</div>

<style lang="stylus">
@import variables

.milestone_card
    margin-bottom 24px
.milestone
    display: grid
    width: 100%
    max-width:  850px
    grid-template-columns: 150px max-content 2fr;
    grid-gap 0 24px
    @media (max-width $tablet)
        grid-template-columns max-content 1fr
        grid-gap 12px 24px
.line
    width 4px
    height 100%
    display flex
    justify-content center
    background transparify(white, 10%)
    @media (max-width $tablet)
        grid-row 1 / span 2
.last-line
    background none
.circle
    min-width 20px
    height 20px
    background $brand
    border-radius 50px

.milestones
    display flex
    flex-direction column
    gap 6px

.dates
    display flex
    flex-direction column
    text-align right
    align-items end
    gap 6px
    @media (max-width $tablet)
        align-items start
        text-align left

</style>
