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
import FrequentlyAskedQuestions from "$lib/display/FrequentlyAskedQuestions.svelte"
import Discord from "svelte-material-icons/Discord.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"

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

let faqs = [
    {
        question: "What is Lumina?",
        answer: "Lumina is a proposed autonomous city, or a city with it's own government, laws, and currency.",
    },
    {
        question: "How can I get involved?",
        answer: `
You can get involved by:
- [Creating an account](/auth)
- [Applying for citizenship](/citizenship)
- [Joining our community on Discord](https://discord.gg/5Q9Y5yY)
- Contributing to the discussions

If you have technical programming skills, design skills, or other skills, join our Discord and let us know how you can help.
        `
    },
    {
        question: "Where will Lumina be located?",
        answer: `
Lumina will be built in a yet-to-be-determined area. The city will be set up as an autonomous SEZ (Special economic zone) granting our city autonomy from it's host government.

Some proposed locations are:

- SEZ in Auckland Island, NZ (Uninhabited)
- SEZ Robinson River, NT, Australia.
- SEZ near Calvert River, NT, Australia.
- SEZ in Liberia
`,
    },
    {
        question: "How can I become a citizen of Lumina?",
        answer: `
You can become a citizen by first:
- [Creating an account](/auth)
- and then [applying for citizenship](/citizenship).
`
    },
    {
        question: "Who will be in charge of Lumina?",
        answer: `
The citizens of Lumina will be in charge of the city. The citizens will vote on all laws, and will be able to propose and create new laws.

Once the Direct Democracy has been established, citizens will vote on laws and will be able to establish new ministries and government organisations.

Ministers will be elected by citizens using Single-Transferable-Vote (STV) to run the ministries that may be created in the legislation. The power of ministers will be limited by the legislation written by citizens.

This system reduces corruption, as ministers cannot be bribed to change legislation (as they do not have the power to do so, without majority citizen approval).

This system makes each government ministries independent and autonomous from one-another, and increases accountability of ministers to the public, as they are directly responsible for their own ministries, with only the citizens above to report to.
`,
    },
    {
        question: "How does the system ensure that my vote is secure and counted accurately",
        answer: `
Our system uses a multi-signature validation process. When you vote, your decision is sent to several independent divisions, each of which verifies and signs your vote.

You will also be able to verify that your vote was counted correctly by checking the anonymous public vote log and through immediate notifications sent to you confirming your vote.

For a more technical explanation of our system, see [voting system security document](https://www.notion.so/lumina-gov/Voting-System-Security-a089e20812d9477f987f166a22955034?pvs=4)
`,
    },
    {
        question: "How will Lumina be funded?",
        answer: `
Funding for the movement will be done through a few stages:

- Stage 1: Funding essential services.
    - Revenues from [Lumina University](https://luminauniversity.earth)
    - Donations from citizens and supporters
- Stage 2: Transitioning into a professional organisation
    - Revenue from Lumina Banking services (transaction fees, interest on loans, etc)
    - Revenue from citizenship applications
- Stage 3: Settlement
    - Revenue from land sales
    - Revenue from settlement packages (housing, supplies, etc)
    - Tax revenue
`,
    },
    {
        question: "How will tax work in Lumina?",
        answer: `
Lumina will be primarily using a consumption/sales tax, which is a tax on the purchases between individuals and businesses.

The consumption tax rate will be approximately set to around 20-30% and only charged on purchases between individuals and businesses.

Income will not be taxed. So if you earn $100,000, and spend $50,000 you are only taxed on the $50,000 you spent.

#### Benefits of a consumption tax
- **Simplicity**: A consumption tax is relatively simple to implement and understand, compared to complex income tax systems. This could make it easier for the government to administer and for citizens to comply with.
- **Efficiency**: A consumption tax can be efficient to collect, as it is levied at the point of sale and can be automatically collected through the use of digital technologies. This could reduce administrative costs and improve compliance.
- **Transparency**: A consumption tax is transparent, as the tax rate is clearly visible on the price of goods and services. This could make it easier for citizens to understand the tax system and hold the government accountable for its tax policy.
- **Economic growth**: A consumption tax can encourage economic growth, as it does not tax income or savings. This could provide incentives for individuals and businesses to invest and save, leading to increased economic activity.
- **Automatic**: A consumption tax can be automatically collected through the use of digital technologies. This could reduce administrative costs and improve compliance. It removes the need for tax returns and lengthy forms for citizens to fill out

#### Other notes
- Rebates for low-earners will be offered to citizens.
- Citizens will also be able choose how part of their money is allocated towards government services, enabling them more direct control over what the government spends its money on.
`,
    },
]

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
                <FlexWrap>
                    <Button
                        style="branded"
                        href="/dashboard"
                        hug={true}
                        left_icon={Apps}>
                        Open Dashboard
                    </Button>
                    <Button
                        style="translucent"
                        href={site_data.socials.discord}
                        hug={true}
                        right_icon={Discord}>
                        Join Discord
                    </Button>
                </FlexWrap>
            {:else}
                <div class="large-paragraph">
                    for <Coloured>you</Coloured>, by <Coloured>you</Coloured>.
                </div>
                <FlexWrap>
                    <Button
                        style="branded"
                        href="/auth"
                        hug={true}
                        right_icon={Settlement}>
                        Get citizenship
                    </Button>
                    <Button
                        style="translucent"
                        href={site_data.socials.discord}
                        hug={true}
                        right_icon={Discord}>
                        Join Discord
                    </Button>
                </FlexWrap>
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
    <ResponsiveLayout
        gap={40}
        min_item_size={300}>
        <FlexBox
            --flex-direction="column"
            --justify-content="center">
            <Heading level={3}>
                <Filled>Lumina's</Filled> System
            </Heading>
            <Paragraph>
                Thanks to modern technology, it's finally possible to bypass corrupt representatives, by enabling citizens to <Coloured>debate and vote online</Coloured>, ensuring every citizen's voice has a say in the direction of our society.
            </Paragraph>
            <LuminaSystemSvg/>
        </FlexBox>
        <FlexBox
            --flex-direction="column"
            --justify-content="center">
            <DebateSvg/>
        </FlexBox>
    </ResponsiveLayout>
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
<Hero
    --border-top="2px solid rgba(255, 255, 255, 0.1)"
    translucent={false}
    vertical_padding={60}>
    <FrequentlyAskedQuestions faqs={faqs}/>
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