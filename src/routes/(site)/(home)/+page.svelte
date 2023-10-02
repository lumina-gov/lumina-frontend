<PageHead
    description="Lumina is a social experiment with the goals of setting up a new innovative and environmentally sustainable city."
    include_suffix={false}
    title="Lumina » The City of the Future"
    type="website"
/>
<SchemaComponent schema={organizationSchema}/>
<script lang="ts">
import Settlement from "$lib/icons/Settlement.svelte"
import Button from "$lib/controls/Button.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import type { GovernmentOrganization, WithContext } from "schema-dts"
import PageHead from "$lib/components/PageHead.svelte"
import site_data from "$lib/data/site_data"
import SchemaComponent from "$lib/components/SchemaComponent.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import Heading from "$lib/display/Heading.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import StatBlock from "./StatBlock.svelte"
import Passport from "svelte-material-icons/Passport.svelte"
import Globe from "./Globe.svelte"
import Filled from "$lib/display/Filled.svelte"
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import FlexBox from "$lib/layouts/FlexBox.svelte"
import VotingSVG from "./VotingSVG.svelte"
import CycleSVG from "./CycleSVG.svelte"
import CurrentSystemSvg from "./CurrentSystemSVG.svelte"
import LuminaSystemSvg from "./LuminaSystemSvg.svelte"
import DebateSvg from "./DebateSvg.svelte"
import WizardItem from "$lib/display/WizardItem.svelte"
import Telescope from "svelte-material-icons/Telescope.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import Icon from "$lib/display/Icon.svelte"
import ArrowRight from "svelte-material-icons/ArrowRight.svelte"

export const organizationSchema: WithContext<GovernmentOrganization> = {
    "@context": "https://schema.org",
    "@id": "https://lumina.earth/",
    "@type": "GovernmentOrganization",
    "name": "Lumina",
    "description": "Lumina is a proposed autonomous city, with it's own government, laws, and currency.",
    "alternateName": "Government of Lumina",
    "url": "https://lumina.earth",
    "logo": "https://lumina.earth/images/lumina.png",
    "sameAs": [
        site_data.socials.facebook,
        site_data.socials.tiktok,
        site_data.socials.twitter,
        site_data.socials.youtube,
        "https://www.wikidata.org/wiki/Q104434355",
        "https://lumina.earth",
        "https://www.crunchbase.com/organization/lumina-autonomous-government",
    ]
}

export let data

$: user = data.user_store.user

</script>
<div class="wrapper">
    <Globe/>
    <Grid
        horizontal_gap={60}
        padding_vertical={200}
        vertical_gap={60}>
        <GridItem
            align_items="center"
            columns={{
                laptop: "span 8",
                tablet: "span 8",
                mobile: "span 4"
            }}
            gap={16}
            justify_content="center">
            <div class="large-paragraph">We're building the</div>
            <h1>city of the <Coloured --color="var(--brand)">future</Coloured></h1>
            {#if user}
                <div class="large-paragraph">
                    for <Coloured --color="var(--brand)">{ user.first_name }</Coloured>,
                    by <Coloured --color="var(--brand)">{ user.first_name }</Coloured>.
                </div>
                <Button
                    style="branded"
                    href="/dashboard"
                    hug={true}
                    left_icon={Apps}>
                    Open Dashboard
                </Button>
            {:else}
                <div class="large-paragraph">
                    for <Coloured>you</Coloured>, by <Coloured>you</Coloured>.
                </div>
                <Button
                    style="branded"
                    href="/auth"
                    hug={true}
                    right_icon={Settlement}>
                    Get citizenship
                </Button>
            {/if}
        </GridItem>
        <GridItem
            align_items="center"
            columns={{
                laptop: "span 8",
                tablet: "span 8",
                mobile: "span 4"
            }}
            justify_content="center"
            position="relative">
            <StatBlock
                stat={{
                    icon: Passport,
                    name: "Citizens registered",
                    value: data.user_count,
                    color: "#5D35D5"
                }}/>
        </GridItem>
    </Grid>
</div>
<Hero
    --border-top="2px solid rgba(255, 255, 255, 0.1)"
    vertical_padding={100}>
    <ResponsiveLayout
        gap={40}
        min_item_size={300}>
        <FlexBox
            --flex-direction="column"
            --gap="16px"
            --justify-content="center">
            <Heading level={2}><Filled>What</Filled> is Lumina?</Heading>
            <Paragraph>
                Lumina is a movement to establish a new autonomous city-state where the citizens directly <Coloured>vote on all laws</Coloured>,
                free from corporate lobbying influences, and corruption.
            </Paragraph>
        </FlexBox>
        <VotingSVG/>
    </ResponsiveLayout>
</Hero>
<Hero
    --border-top="2px solid rgba(255, 255, 255, 0.1)"
    translucent={true}
    vertical_padding={60}>
    <ResponsiveLayout
        gap={40}
        min_item_size={300}>
        <FlexBox
            --flex-direction="column"
            --justify-content="center">
            <Heading level={3}>
                <Filled --color="var(--red)">Why?</Filled>
            </Heading>
            <Paragraph>
                The current system of government is <Coloured --color="var(--red)">broken</Coloured>.
                Politicians are <Coloured --color="var(--red)">corrupt</Coloured>, and the people have <Coloured --color="var(--red)">no say</Coloured> in the laws that govern them.
            </Paragraph>
            <Paragraph>
                We're on the precipice of a monumental shift. With <Coloured --color="var(--red)">inflation rates</Coloured> rocketing everyday living has become an uphill battle for many
            </Paragraph>
            <Paragraph>
                As <Coloured --color="var(--red)">societal divides</Coloured> deepen, it's clear our world's foundations are shaking.
            </Paragraph>
            <Paragraph>
                We believe that the only way to fix this is to start from scratch, and build a new city, with a new government, and a new system.
            </Paragraph>
        </FlexBox>
        <CycleSVG/>
    </ResponsiveLayout>
</Hero>
<Hero
    --border-top="2px solid rgba(255, 255, 255, 0.1)"
    translucent={true}
    vertical_padding={60}>
    <ResponsiveLayout
        gap={40}
        min_item_size={300}>
        <CurrentSystemSvg/>
        <FlexBox
            --flex-direction="column"
            --justify-content="center">
            <Heading level={3}>
                The <Filled --color="var(--red)">Current System</Filled>
            </Heading>
            <Paragraph>
                Elections are intended to give citizens a voice, allowing them to select their representatives. Yet, behind the scenes, corporations and lobbyists <Coloured --color="var(--red)">fund and control</Coloured> our elected officials.
            </Paragraph>
            <Paragraph>
                The current system is <Coloured --color="var(--red)">broken</Coloured>, and it's time for a change.
            </Paragraph>
        </FlexBox>
    </ResponsiveLayout>
</Hero>
<Hero
    --border-top="2px solid rgba(255, 255, 255, 0.1)"
    translucent={true}
    vertical_padding={60}>
    <Grid
        horizontal_gap={32}
        side_padding={false}
        vertical_gap={32}>
        <GridItem
            columns={{
                laptop: "span 7",
                tablet: "span 8",
                mobile: "span 4"
            }}
            gap={24}
            justify_content="center">
            <Heading level={3}>
                <Filled>Lumina's</Filled> System
            </Heading>
            <Paragraph>
                Thanks to modern technology, it's finally possible to bypass corrupt representatives, by enabling citizens to <Coloured>debate and vote online</Coloured>, ensuring every citizen's voice has a say in the direction of our society.
            </Paragraph>
            <LuminaSystemSvg/>
        </GridItem>
        <GridItem
            columns={{
                laptop: "span 9",
                tablet: "span 8",
                mobile: "span 4"
            }}>
            <DebateSvg/>
        </GridItem>
    </Grid>
</Hero>
<Hero align="center">
    <Heading level={2}>
        <Filled>Step</Filled> by <Filled>Step</Filled> Plan
    </Heading>
    <FlexBox --gap="none">
        <WizardItem
            checked={true}
            margin_bottom="40px">
            <Heading level={3}>
                Define our mission & vision
            </Heading>
            <Paragraph>
                Embarking on this journey requires a clear compass. Dive into Lumina's foundational beliefs by exploring our meticulously crafted mission and vision, serving as the beacon guiding our collective path forward.
            </Paragraph>
            <Button
                style="translucent"
                href="/mission-and-vision"
                left_icon={Telescope}
                right_icon={ChevronRight}>
                Read our Mission
            </Button>
        </WizardItem>
        <WizardItem
            checked={true}
            margin_bottom="40px">
            <Heading level={3}>
                Grassroots Community Building
            </Heading>
            <Paragraph>
                At Lumina, we believe that true progress sprouts from the ground up. Engage with our vibrant grassroots community, where every voice contributes to our evolving city-state movement.
            </Paragraph>
            <Button
                style="branded"
                href="/auth"
                left_icon={Settlement}
                right_icon={ChevronRight}>
                Become a citizen
            </Button>
        </WizardItem>
        <WizardItem
            checked={false}
            margin_bottom="40px">
            <Heading level={3}>
                Building Digital Infrastructure
            </Heading>
            <Paragraph>
                Our step-by-step blueprint involves setting up a collaborative platform for legislative drafting, introducing efficient voting systems,
                establishing interactive debate arenas, integrating comprehensive citizenship databases,
                and rolling out a modern banking infrastructure for Lumina's economic growth
            </Paragraph>
            <Button
                style="translucent"
                href="/dashboard"
                left_icon={Apps}>
                Open Dashboard
            </Button>
        </WizardItem>
        <WizardItem
            checked={false}
            margin_bottom="40px">
            <Heading level={3}>
                Planning Logistics
            </Heading>
            <Paragraph>
                In the Settlement Logistics phase, we turn our vision into detailed actionable steps, prioritising fundraising initiatives, detailed infrastructure outlines,
                organising transport, and doing city planning. It's a comprehensive approach to ensure that Lumina's foundation is robust, sustainable, and primed for the future.
            </Paragraph>
        </WizardItem>
        <WizardItem
            checked={false}
            margin_bottom="40px">
            <Heading level={3}>
                Settlement
            </Heading>
            <Paragraph>
                The Settlement step is where Lumina's vision truly starts to materialise, as we translate meticulous plans into concrete reality.
                This phase involves the physical establishment of infrastructure, realising city plans, and ensuring all foundational elements are integrated and functional,
                and laying down the bricks and mortar of Lumina.
            </Paragraph>
        </WizardItem>
    </FlexBox>
</Hero>
<Hero
    --border-top="2px solid rgba(255, 255, 255, 0.1)"
    translucent={true}>
    <div class="large-text">
        Join the early adopters building capabilities and help shape our future.
        <a href="/auth">Get Involved <Icon icon={ArrowRight}/></a>
    </div>
</Hero>
<style>

.large-text {
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 auto;
    max-width: 800px;
    padding: 0 20px;
}

.wrapper {
    overflow: hidden;
    position: relative;
}

.large-paragraph {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 600;
}

h1 {
    font-weight: 700;
    font-size: 46px;
    text-align: center;
}
</style>