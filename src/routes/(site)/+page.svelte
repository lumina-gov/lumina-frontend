<PageHead
    type="website"
    title="Lumina » The City of the Future"
    include_suffix={false}
    description="Lumina is a social experiment with the goals of setting up a new innovative and environmentally sustainable city."
    />
<svelte:head>
    {@html serializeSchema(organizationSchema) }
</svelte:head>
<script lang="ts">
import UpcomingEvents from "$lib/components/events/UpcomingEventsHero.svelte"
import NewsHero from "$lib/components/pages/news/NewsHero.svelte"
import DiscordBanner from "./DiscordBanner.svelte"
import KnowledgeHubCard from "./HubsBlock.svelte"
import StatsHero from "./StatsBlock.svelte"
import JobHero from "$lib/components/jobs/JobHero.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import Domain from "svelte-material-icons/Domain.svelte"
import AccountOutline from "svelte-material-icons/AccountOutline.svelte"
import Flash from "svelte-material-icons/Flash.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Button from "$lib/controls/Button.svelte"
import HubArea from "$lib/components/hub/HubArea.svelte"
import Coloured from "$lib/display/Coloured.svelte"
import Hero from "$lib/components/layouts/Hero.svelte"
import ArchiveBox from "svelte-material-icons/Archive.svelte"
import Bank from "svelte-material-icons/Bank.svelte"
import Cash from "svelte-material-icons/Cash.svelte"
import type { PageData } from "./$types"
import type { GovernmentOrganization, WithContext } from "schema-dts"
import { serializeSchema } from "$lib/utils/schema"
import PageHead from "$lib/components/PageHead.svelte"


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
        "https://twitter.com/luminagov",
        "https://www.facebook.com/luminagov",
        "https://www.wikidata.org/wiki/Q104434355",
        "https://www.tiktok.com/@luminagov",
        "https://www.youtube.com/channel/UCL8Fjjq-gSzWMbAC3sEOXpA",
        "https://lumina.earth",
        "https://www.crunchbase.com/organization/lumina-autonomous-government",
    ]
}

export let data: PageData

let events = [
    {
        link: "/",
        date: {
            time: {
                hour: "00",
                minutes: "00",
                pm: false
            },
            day: 31,
            month: "Aug",
            year: 2022
        },
        title: "Lumina Day",
        type: "Holiday",
        img: "/images/lumina_flag.png",
        location: "Lumina"
    },
    {
        link: "/",
        date: {
            time: {
                hour: "00",
                minutes: "00",
                pm: false
            },
            day: 31,
            month: "Aug",
            year: 2022
        },
        title: "Lumina Day",
        type: "Holiday",
        img: "images/lumina_flag.png",
        location: "Lumina"
    },
]

let featuredStories = [
    {
        tag: {
            text: "Announcement",
            color: "#492C9C"
        },
        date: {
            dayAsNumber: 5,
            month: "Jan",
            year: 2022
        },
        title: "Lumina hits 2000 citizens",
        author: {
            name: "Albert",
            img: "/images/albert_dp.png"
        }
    },
    {
        tag: {
            text: "Announcement",
            color: "#492C9C"
        },
        date: {
            dayAsNumber: 3,
            month: "August",
            year: 2021
        },
        title: "Lumina hits 1000 citizens",
        author: {
            name: "Albert",
            img: "/images/albert_dp.png"
        }
    }
]

</script>
<Hero>
    <div class="hero">
        <div class="hero-main">
            <h1>city of the <Coloured>future</Coloured></h1>
            <p>
                Welcome to <Coloured>Lumina</Coloured>, a social experiment with the goals of
                setting up a new innovative and environmentally sustainable city.
            </p>
            <p>
                Lumina proposes to set up an <Coloured>Autonomous Zone</Coloured>, which is a
                city with it's own government, laws, and currency.
            </p>
            <Button href="/onboarding" right_icon={Settlement} hug={true}>
                Become a citizen
            </Button>
        </div>
        <div class="image-wrapper">
            <img class="hero-image" src={"/images/hero-image.svg"} alt="a city skyline">
        </div>
    </div>
    <StatsHero stats={[
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
</Hero>
<Hero>
    <DiscordBanner/>
</Hero>
<Hero translucent={true}>
    <HubArea/>
</Hero>
<Hero>
    <JobHero/>
</Hero>
<div class="extra-info-wrapper">
    <UpcomingEvents bind:events />
    <KnowledgeHubCard
        main_area={{
            href: "https://lumina-gov.notion.site/Knowledge-Hub-048c967061914862b2eeff5ba21da29b",
            icon: ArchiveBox,
            title: "Knowledge Hub",
            description: "Learn about how Lumina plans to become a reality. Get information on funding, planning, settlement & more."
        }}
        areas={[
            {
                href: "https://lumina-gov.notion.site/Banking-Monetary-system-d3d4d2a99c3a41b59a468fb7db41d335",
                icon: Bank,
                title: "Banking & Monetary System"
            },
            {
                href: "https://lumina-gov.notion.site/Taxation-System-84fd7a0d3d6b4951aa17ebfb4af4d702",
                icon: Cash,
                title: "Taxation System"
            }
        ]}/>
</div>
<NewsHero bind:featuredStories />

<style lang="stylus">
@import "variables"

.hero
    position relative
    display flex
    align-items center
    width 100%
    .hero-main
        max-width 500px
        z-index 2
        position relative
        width 100%
        p
            color transparify(white, 70%)
    .image-wrapper
        position absolute
        right 0
        z-index 1
        max-width 600px
        width 100%
        display flex
        align-items center
        justify-content flex-end
        @media (max-width 800px)
            max-width 400px
        @media (max-width 500px)
            max-width 250px
        img
            width 100%


h1
    font-size 80px
    font-weight 600
    margin 0
    @media (max-width 500px)
        font-size 50px
    @media (max-width 420px)
        font-size 42px

.hero-image
    position relative
    left 0

.extra-info-wrapper
    display grid
    grid-template-columns 1.2fr 1fr
    background transparify(white, 4%)
    width 100%
    @media (max-width $laptop)
        grid-template-columns 1fr

</style>