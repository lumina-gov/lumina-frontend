<PageHead
    description="Lumina is a social experiment with the goals of setting up a new innovative and environmentally sustainable city."
    include_suffix={false}
    title="Lumina » The City of the Future"
    type="website"
/>
<SchemaComponent schema={organizationSchema}/>
<script lang="ts">
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import Domain from "svelte-material-icons/Domain.svelte"
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
import Card from "$lib/cards/Card.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import Heading from "$lib/display/Heading.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Profile from "$lib/display/Profile.svelte"
import type { Props } from "$lib/utils/typed_props"
import type ServiceCard from "$lib/components/ServiceCard.svelte"
import Passport from "svelte-material-icons/Passport.svelte"
import Vote from "svelte-material-icons/Vote.svelte"
import Cog from "svelte-material-icons/Cog.svelte"
import ServicesArea from "./ServicesArea.svelte"
import InformationArea from "./InformationArea.svelte"
import Telescope from "svelte-material-icons/Telescope.svelte"
import { CitizenshipStatus } from "$lib/graphql/graphql-types"
import Chart from "./Chart.svelte"
import StatBlock from "./StatBlock.svelte"
import MainCards from "./MainCards.svelte"
import Wizard from "./Wizard.svelte"

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
$: user_has_citizenship_application = user?.citizenship_status === CitizenshipStatus.Pending

$: service_cards_top = [
    user_has_citizenship_application ? {
        icon: Passport,
        title: "Citizenship Application",
        href: "/citizenship",
        tag: {
            text: "Pending",
            color: "yellow"
        },
        description: "Your citizenship application is currently pending. You will be notified when it is approved."
    } : {
        icon: Passport,
        title: "Apply for citizenship",
        href: "/citizenship",
        tag: {
            text: "Recommended",
            color: "green"
        },
        description: "Apply for citizenship in Lumina, and become a part of the city's government."
    },
    {
        title: "Mission & Vision",
        href: "/mission-and-vision",
        icon: Telescope,
        tag: {
            text: "Information",
            color: "blue",
        },
        description: "Learn about the founding mission and vision for Lumina, and how we plan to achieve it."
    },
    {
        title: "Direct Democracy Platform",
        // href: "/direct-democracy",
        icon: Vote,
        tag: {
            text: "Coming soon",
            color: "white",
            opacity: true
        },
        description: "Vote on proposals and laws, and have your say in the city's future."
    },
    {
        title: "My Organisations",
        // href: "/organisations",
        icon: Domain,
        tag: {
            text: "Coming soon",
            color: "white",
            opacity: true
        },
        description: "View, register and manage your organisations here."
    }
] satisfies Props<ServiceCard>[]

</script>
<Grid
    horizontal_gap={60}
    padding_vertical={100}
    vertical_gap={60}>
    <GridItem
        align_items="flex-start"
        columns={{
            laptop: "span 8",
            tablet: "span 8",
            mobile: "span 4"
        }}
        gap={16}>
        {#if user}
            <h2>Welcome back</h2>
            <Heading><Profile size="40px"/> { user.first_name }</Heading>
            <Wizard user={user}/>
        {:else}
            <h2>Welcome to the</h2>
            <Heading>city of the <br><Coloured>future</Coloured></Heading>
            <Button
                style="branded"
                href="/auth"
                hug={true}
                left_icon={ExitToApp}
                right_icon={Settlement}>
                Start
            </Button>
            <Card
                align_items="flex-start"
                gap="16px"
                padding="32px">
                <Heading
                    left_icon={Information}
                    level={3}>What is Lumina?</Heading>
                <Paragraph>
                    Welcome to <Coloured>Lumina</Coloured>, a social experiment with the goals of
                    setting up a new innovative and environmentally sustainable city.
                </Paragraph>
                <Paragraph>
                    Lumina proposes to set up an <Coloured>Autonomous Zone</Coloured>, which is a
                    city with it's own government, laws, and currency.
                </Paragraph>
            </Card>
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
        <Chart
            citizen_count={data.user_count}
            data={data.user_count_by_interval}/>
    </GridItem>
</Grid>
<MainCards cards={service_cards_top}/>
<Hero translucent={true}>
    <div class="padding"/>
    <Heading
        left_icon={Cog}
        level={2}>Services</Heading>
    <Paragraph>
        The city of Lumina is run by the citizens, for the citizens. Here are some of the services you can use to get involved.
    </Paragraph>
    <ServicesArea/>
</Hero>
<Hero>
    <Heading
        left_icon={Information}
        level={2}>Information</Heading>
    <Paragraph>
        Here you can find information about the city, and how it works.
    </Paragraph>
    <InformationArea/>
</Hero>

<style lang="stylus">
@import variables

h2
    font-size 20px
    font-weight 600
    opacity 0.3

.padding
    height 80px
    @media (max-width: $tablet)
        height 0

</style>