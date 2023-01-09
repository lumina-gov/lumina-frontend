<PageHead
    description="Lumina is a social experiment with the goals of setting up a new innovative and environmentally sustainable city."
    include_suffix={false}
    title="Lumina » The City of the Future"
    type="website"
/>
<SchemaComponent schema={organizationSchema}/>
<script lang="ts">
import StatsHero from "./StatsBlock.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import Domain from "svelte-material-icons/Domain.svelte"
import AccountOutline from "svelte-material-icons/AccountOutline.svelte"
import Flash from "svelte-material-icons/Flash.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Button from "$lib/controls/Button.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Hero from "$lib/layouts/Hero.svelte"
import type { PageData } from "./$types"
import type { GovernmentOrganization, WithContext } from "schema-dts"
import PageHead from "$lib/components/PageHead.svelte"
import site_data from "$lib/data/site_data"
import SchemaComponent from "$lib/components/SchemaComponent.svelte"
import Grid from "$lib/layouts/Grid.svelte"
import GridItem from "$lib/layouts/GridItem.svelte"
import Card from "$lib/cards/Card.svelte"
import Paragraph from "$lib/display/Paragraph.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import Heading from "$lib/display/Heading.svelte"
import Information from "svelte-material-icons/Information.svelte"
import Profile from "$lib/display/Profile.svelte"
import type { Props } from "$lib/utils/typed_props"
import ServiceCard from "$lib/components/ServiceCard.svelte"
import Passport from "svelte-material-icons/Passport.svelte"
import Vote from "svelte-material-icons/Vote.svelte"
import Cog from "svelte-material-icons/Cog.svelte"
import ServicesArea from "./ServicesArea.svelte"
import InformationArea from "./InformationArea.svelte"
import Notification from "svelte-material-icons/Bell.svelte"
import AlertsArea from "./AlertsArea.svelte"

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

export let data: PageData

$: user = data.user_wrapper.user
$: user_has_citizenship_applicaiton = user?.citizenship_status === "pending"

$: service_cards_top = [
    user_has_citizenship_applicaiton ? {
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
    padding_vertical={100}
    vertical_gap={60}>
    {#if user}
        <GridItem
            align_items="flex-start"
            columns={{
                laptop: "2 / span 6",
                tablet: "span 4",
                mobile: "span 4"
            }}
            gap={40}>
            <VerticalLayout>
                <h2>Welcome back</h2>
                <h1><Profile size="40px"/> { user.first_name }</h1>
            </VerticalLayout>
        </GridItem>
    {:else}
        <GridItem
            align_items="flex-start"
            columns={{
                laptop: "2 / span 7",
                tablet: "span 4",
                mobile: "span 4"
            }}
            gap={40}>
            <VerticalLayout>
                <h2>Welcome to the</h2>
                <h1>city of the <br><Coloured>future</Coloured></h1>
            </VerticalLayout>

            <FlexWrap>
                <Button
                    style="translucent"
                    href="/signin"
                    hug={true}
                    right_icon={ExitToApp}>
                    Sign In
                </Button>
                <Button
                    href="/onboarding"
                    hug={true}
                    right_icon={Settlement}>
                    Become a citizen
                </Button>
            </FlexWrap>
        </GridItem>
        <GridItem
            columns={{
                laptop: "span 7",
                tablet: "span 4",
                mobile: "span 4"
            }}>
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
        </GridItem>
    {/if}
    <GridItem
        columns={{
            laptop: "span 16",
            tablet: "span 8",
            mobile: "span 4"
        }}>
        <StatsHero
            stats={[
                {
                    icon: AccountGroup,
                    name: "Citizens registered",
                    value: data.user_count,
                    color: "#5D35D5"
                },
                {
                    icon: Domain,
                    name: "Government Ministries",
                    value: 15,
                    color: "#4F63CE"
                },
                {
                    icon: AccountOutline,
                    name: "Government Staff",
                    value: 36,
                    color: "#4488C9"
                },
                {
                    icon: Flash,
                    name: "Renewable",
                    value: "100%",
                    color: "#34BFC1"
                }
            ]}/>
    </GridItem>
    <GridItem
        columns={{
            laptop: "span 16",
            tablet: "span 8",
            mobile: "span 4"
        }}
    >
        <Grid
            columns={{
                laptop: 9,
                tablet: 3,
                mobile: 3
            }}
            side_padding={false}>
            {#each service_cards_top as card}
                <GridItem
                    align_items="stretch"
                    columns={{
                        laptop: "span 3",
                        tablet: "span 3",
                        mobile: "span 3"
                    }}
                    flex_direction="row">
                    <ServiceCard
                        {...card}
                        size="large"/>
                </GridItem>
            {/each}
        </Grid>
    </GridItem>
</Grid>

<Hero
    translucent={true}
    vertical_padding={100}>
    <Grid
        side_padding={false}
        vertical_gap={100}>
        <GridItem
            align_items="flex-start"
            columns={{
                laptop: "span 16",
                tablet: "span 8",
                mobile: "span 4"
            }}
            gap={16}>
            <Heading
                left_icon={Cog}
                level={2}>Services</Heading>
            <Paragraph>
                The city of Lumina is run by the citizens, for the citizens. Here are some of the services you can use to get involved.
            </Paragraph>
            <ServicesArea/>
        </GridItem>
        <GridItem
            align_items="flex-start"
            columns={{
                laptop: "span 11",
                tablet: "span 8",
                mobile: "span 4"
            }}
            gap={16}>
            <Heading
                left_icon={Information}
                level={2}>Information</Heading>
            <Paragraph>
                Here you can find information about the city, and how it works.
            </Paragraph>
            <InformationArea/>
        </GridItem>
        <GridItem
            align_items="flex-start"
            columns={{
                laptop: "span 5",
                tablet: "span 8",
                mobile: "span 4"
            }}
            gap={16}>
            <Heading
                left_icon={Notification}
                level={2}>Alerts & Notifications</Heading>
            <Paragraph>
                Important events, alerts and notifications.
            </Paragraph>
            <AlertsArea/>
        </GridItem>
    </Grid>
</Hero>

<style lang="stylus">
@import "variables"

h1
    font-size 40px
    font-weight 600
    display flex
    align-items center
    gap 16px
h2
    font-size 20px
    font-weight 600
    opacity 0.3

</style>