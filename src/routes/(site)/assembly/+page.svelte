<script lang="ts">
import Heading from "$lib/display/Heading.svelte"
import CheckboxMarkedCircle from "svelte-material-icons/CheckboxMarkedCircle.svelte"
import ScriptText from "svelte-material-icons/ScriptText.svelte"
import InfoBox from "$lib/display/InfoBox.svelte"
import Tag from "$lib/display/Tag.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Proposal from "./Proposal.svelte"
import Card from "./AssemblyCard.svelte"
import Button from "$lib/controls/Button.svelte"
import Plus from "svelte-material-icons/Plus.svelte"
import AssemblyStat from "./AssemblyStat.svelte"
import HumanGreetingVariant from "svelte-material-icons/HumanGreetingVariant.svelte"

let proposals = [
    {
        id: "1",
        title: "Proposal to make healthcare free",
        discussion_count: 32,
        author: "John Smith",
        time_left: new Date(new Date().setDate(new Date().getDate() + 2)),
        votes: {
            for: 52,
            against: 50,
        }
    },
    {
        id: "2",
        title: "Proposal to lower taxes",
        discussion_count: 16,
        author: "Mike Jones",
        time_left: new Date(new Date().setDate(new Date().getDate() + 5)),
        votes: {
            for: 0,
            against: 100,
        }
    },
    {
        id: "3",
        title: "Improve infrastructure legislation",
        discussion_count: 46,
        author: "Jane Doe",
        time_left: new Date(new Date().setDate(new Date().getDate() + 6)),
        votes: {
            for: 300,
            against: 50,
        }
    }
]

</script>

<div class="section">
    <div class="inner-section space-between">
        <Heading left_icon={CheckboxMarkedCircle}>Lumina Assembly</Heading>
        <Button
            hug={true}
            style="translucent"
            right_icon={Plus}>
            New Draft
        </Button>
    </div>
</div>
<div class="section">
    <div class="inner-section grid-2">
        <InfoBox
            icon={Information}
            title="Lumina Assembly"
            tag="Info"
            color="white">
            <div class="description">
                Lumina Assembly is Lumina's direct democracy system, which enables citizens to propose and vote on new legislation.
            </div>
            <Tag color="white">Stats</Tag>
            <AssemblyStat icon={HumanGreetingVariant} text="550 active voters"/>
            <AssemblyStat icon={CheckboxMarkedCircle} text="5,320 total votes"/>
        </InfoBox>
        <div class="cards">
            <Card
                icon={ScriptText}
                href="/legislation"
                title="Legislative Library"
                alert_count={32}
                description={"View the library of active and historical legislation in Lumina."}/>
            <Card
                href="/assembly/petitions"
                icon={ScriptText}
                title="Petitions"
                alert_count={4}
                description={"Before legislation is proposed to the assembly, it must first obtain a certain number of petitions."}/>
        </div>
    </div>
</div>
<div class="section">
    <div class="inner-section vertical-flex">
        <Heading level={2} left_icon={ScriptText}>Proposed Legislation</Heading>
        <div class="cards">
            {#each proposals as proposal}
                <Proposal proposal={proposal}/>
            {/each}
        </div>
    </div>
</div>
<style lang="stylus">
@import "variables"

.space-between
    display flex
    justify-content space-between
    align-items center

.cards
    display flex
    flex-direction column
    gap 16px

.grid-2
    display grid
    grid-template-columns 1fr 1fr
    gap 16px
    @media (max-width: 800px)
        grid-template-columns 1fr

.description
    opacity 0.5

.section
    padding 40px 16px
    border-bottom 1px solid transparify(white, 10%)

.inner-section
    max-width 1000px
    margin 0 auto

.vertical-flex
    display flex
    gap 16px
    flex-direction column
</style>