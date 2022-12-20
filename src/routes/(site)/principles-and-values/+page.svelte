<script lang="ts">
import SubHeading from "$lib/components/general_components/SubHeading.svelte"
import VerticalLinkedDiagram from "$lib/components/general_components/vertical_linked_diagram/VerticalLinkedDiagram.svelte"
import ScriptText from "svelte-material-icons/ScriptText.svelte"
import RobotIndustrial from "svelte-material-icons/RobotIndustrial.svelte"
import Sync from "svelte-material-icons/Sync.svelte"
import Brain from "svelte-material-icons/Brain.svelte"
import ArmFlexOutline from "svelte-material-icons/ArmFlexOutline.svelte"
import Leaf from "svelte-material-icons/Leaf.svelte"
import Shape from "svelte-material-icons/Shape.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Hero from "$lib/components/heros/Hero.svelte"
import Inner from "$lib/components/heros/Inner.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Button from "$lib/controls/Button.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import InfoBox from "$lib/components/general_components/InfoBox.svelte"
import type { InfoBoxType } from "$lib/components/general_components/general_components_types"
import Telescope from "svelte-material-icons/Telescope.svelte"
import ScaleBalance from "svelte-material-icons/ScaleBalance.svelte"
import Tag from "$lib/display/Tag.svelte"
import Heading from "$lib/display/Heading.svelte"

let diagramSections = [
    {
        icon: RobotIndustrial,
        heading: "Pragmatism",
        description: "...",
        active: false,
        separatorActive: false
    },
    {
        icon: Leaf,
        heading: "Sustainability",
        description: "...",
        active: false,
        separatorActive: false
    },
    {
        icon: Sync,
        heading: "Iterate and improve",
        description: "...",
        active: false,
        separatorActive: false
    },
    {
        icon: Brain,
        heading: "Never stop learning",
        description: "...",
        active: false,
        separatorActive: false
    },
    {
        icon: ArmFlexOutline,
        heading: "Be bold",
        description: "...",
        active: false,
        separatorActive: false
    }
]

let subHeadingInfoSecondSection = {
    icon: Shape,
    heading: "Our Values",
    paragraphs: [
        "Principles are fundamental, universal truths that transcend time, geography, culture and context.",
        "They define the foundation for our society, and provide a base for our chain of reasoning."
    ]
}

let values: InfoBoxType[] = [
    {
        icon: Telescope,
        heading: "Optimism",
        paragraphs: ["..."]
    },
    {
        icon: Telescope,
        heading: "Teamwork",
        paragraphs: ["..."]
    },
    {
        icon: Telescope,
        heading: "Responsibility",
        paragraphs: ["..."]
    },
    {
        icon: Telescope,
        heading: "Self-Sufficiency",
        paragraphs: ["..."]
    },
    {
        icon: Telescope,
        heading: "Humour",
        paragraphs: ["..."]
    },
    {
        icon: Telescope,
        heading: "Optimism",
        paragraphs: ["..."]
    },
]


let valueBoxes: InfoBoxType = {
    icon: Information,
    heading: "Optimism",
    paragraphs: ["Learn more about your rights and duties as a citizen of Lumina"]
}


let last_scroll_promise: Promise<void> | null = null
let next_active_item_index = 0

async function scrolled(){
    if (last_scroll_promise) {
        return
    }
    last_scroll_promise = update_diagram_sections()
    await last_scroll_promise
    last_scroll_promise = null
}

async function update_diagram_sections (): Promise<void> {
    let card = diagramSections[next_active_item_index]
    let client_height = window.innerHeight

    if (card) {
        let distanceFromTop = card.el.getBoundingClientRect().top
        if (distanceFromTop < client_height * 0.6) { // if the card is half way up the screen (should be active)
            let prev_card = diagramSections[next_active_item_index - 1]
            if (prev_card) {
                // let the previous item know that this item is now active, and separator should be shown
                prev_card.separatorActive = true
                diagramSections = diagramSections
            }
            await new Promise(resolve => setTimeout(resolve, 500))
            card.active = true
            diagramSections = diagramSections
            next_active_item_index++
            // this item may have been passed on scroll, so check again
            return await update_diagram_sections()
        }
    }

    // We need functionality to inactivate items which should not be active at the current scroll level
    card = diagramSections[next_active_item_index - 1]

    if (card) {
        let distanceFromTop = card.el.getBoundingClientRect().top
        if (distanceFromTop > client_height * 0.6) { // if the card is half way up the screen (should be active)
            let prev_card = diagramSections[next_active_item_index - 2]
            if (prev_card) {
                // let the previous item know that this item is now inactive, and separator should be hidden
                prev_card.separatorActive = false
            }

            card.active = false
            diagramSections = diagramSections
            await new Promise(resolve => setTimeout(resolve, 500))
            if (next_active_item_index > 0) {
                next_active_item_index--
                // this item may have been passed on scroll, so check again
                await update_diagram_sections()
            }
        }
    }
}

</script>

<svelte:window on:scroll={scrolled} />
<Hero>
    <Inner>
        <div class="hero-main">
            <Tag>Our core difference</Tag>
            <h1>
                <div>
                    <span class="heading-icon">
                        <Coloured><ScaleBalance/></Coloured>
                    </span>
                    Principles
                </div>
                <div>
                    <Coloured>and values</Coloured>
                </div>
            </h1>
            <div>
                Our mission, principles and values define the emotional, moral, and spiritual core of our society.
            </div>
            <Button href="/onboarding" right_icon={Settlement} hug={true}>
                Become a citizen
            </Button>
        </div>
    </Inner>
</Hero>
<Hero>
    <Inner>
        <div class="gapped">
            <Tag>Principles</Tag>
            <Heading left_icon={ScriptText}>Our Principles</Heading>
            <div class="paras">
                <div class="opacity">
                    Principles are fundamental, universal truths that transcend time, geography, culture and context.
                </div>
                <div class="opacity">
                    They define the foundation for our society, and provide a base for our chain of reasoning.
                </div>
            </div>
        </div>
        <VerticalLinkedDiagram bind:diagramSections />
    </Inner>
    <Inner>
        <div class="inner-hero grid">
            {#each values as value}
                <InfoBox infoBox={value} />
            {/each}
        </div>
    </Inner>
</Hero>

<style lang="stylus">
@import "variables"

h1
    text-transform uppercase
    font-weight 700
    div
        display flex
        gap 8px
        align-items center

.paras
    max-width 600px
    gap 8px
    display flex
    flex-direction column
    text-align center

.opacity
    opacity 0.6

.hero-main
    max-width 600px
    display flex
    padding 100px 0
    flex-direction column
    align-items flex-start
    gap 16px

.gapped
    display flex
    flex-direction column
    gap 16px
    align-items center

.inner-hero
    max-width 1200px
    width 100%
    padding 40px 20px
    margin 0 auto
    display flex
    flex-direction column

.section-wrapper
    display flex
    flex-direction column
    border-top 1px solid #E6E6E6
    border-bottom 1px solid #E6E6E6

.general
    max-width 800px

.inner-hero.grid
    display grid
    grid-template-columns 1fr 1fr 1fr
    grid-gap 20px
    align-items center

</style>