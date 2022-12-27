import type { HubType } from "$lib/types/HubType"

import Domain from "svelte-material-icons/Domain.svelte"
import ScaleBalance from "svelte-material-icons/ScaleBalance.svelte"
import Pillar from "svelte-material-icons/Pillar.svelte"
import PassportBiometric from "svelte-material-icons/PassportBiometric.svelte"
import Telescope from "svelte-material-icons/Telescope.svelte"
import BadgeAccountHorizontal from "svelte-material-icons/AccountBadgeHorizontal.svelte"
import Wifi from "svelte-material-icons/Wifi.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import School from "svelte-material-icons/School.svelte"
import Script from "svelte-material-icons/ScriptText.svelte"
import PieChart from "svelte-material-icons/ChartPie.svelte"
import Job from "svelte-material-icons/HammerScrewdriver.svelte"
import PlaneLanding from "svelte-material-icons/AirplaneLanding.svelte"
import Bank from "svelte-material-icons/Bank.svelte"
import Tax from "svelte-material-icons/Calculator.svelte"
import Family from "svelte-material-icons/FamilyTree.svelte"
import FormatListBullet from "svelte-material-icons/FormatListBulleted.svelte"
import DnaHelix from "svelte-material-icons/Dna.svelte"

export const two_wide: HubType[] = [
    {
        link: "/mission-and-vision",
        tag: {
            text: "Info",
            color: "blue",
        },
        title: {
            icon: Telescope,
            text: "Mission & Vision",
        },
        description: "Learn about our mission and vision for Lumina, and how we plan to achieve it.",
    },
    {
        // link: "/principles-and-values",
        tag: {
            text: "Info",
            color: "blue",
        },
        title: {
            icon: Pillar,
            text: "Principles & Values",
        },
        description: "Our principles and values define the emotional, moral, and spiritual core of our society.",
    },
    {
        // link: "/rights-and-duties",
        tag: {
            text: "Info",
            color: "blue",
        },
        title: {
            icon: ScaleBalance,
            text: "Rights & Duties",
        },
        description: "Learn about your rights and duties required for our society to function.",
    },
    {
        link: "/onboarding",
        tag: {
            text: "Services",
            color: "brand",
        },
        title: {
            icon: PassportBiometric,
            text: "Citizenship",
        },
        description: "Find out the benefits of becoming a citizen in Lumina. Get involved, along with thousands of others today.",
    },
    {
        link: "/dashboard",
        tag: {
            text: "Service",
            color: "brand",
        },
        title: {
            icon: Wifi,
            text: "Lumina Dashboard",
        },
        description: "Lumina's cloud government portal that lets citizens access government services.",
    },
    {
        link: "/government-directory",
        tag: {
            text: "Info",
            color: "brand",
        },
        title: {
            icon: FormatListBullet,
            text: "Government Directory",
        },
        description: "Guide to the structures, organisations and key people in the government of Lumina.",
    },
]

export const three_wide: HubType[] = [
    {
        link: "/media-and-press",
        tag: {
            text: "Info",
            color: "blue"
        },
        title: {
            icon: BadgeAccountHorizontal,
            text: "Media & Press",
        },
        description: "Are you a member of the press looking to speak to a Luminar representative? Contact us here.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Script,
            text: "Legislation",
        },
        description: "See how we're the first city in the world to let citizens create and edit laws and regulations.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: School,
            text: "Education",
        },
        description: "Find out how we're reinventing education for our citizens.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: PieChart,
            text: "Budgeting",
        },
        description: "Learn how Lumina gives the power to citizens to decide where their tax goes.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Job,
            text: "Jobs",
        },
        description: "Learn about Lumina's guaranteed jobs system, how to find jobs or employ people",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: PlaneLanding,
            text: "Tourism",
        },
        description: "Travel to the newest country in the world to see a developing culture.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Domain,
            text: "Business",
        },
        description: "Start a new business in Lumina online in a few minutes, and start getting paid.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Bank,
            text: "Monetary System",
        },
        description: "Learn how we will revolutionise banking in Lumina, with our 100% digital currency, the Aura (Ѧ)",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Tax,
            text: "Tax System",
        },
        description: "Find out how the progressive nature of Lumina's taxes, benefits everyone.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Family,
            text: "Family",
        },
        description: "Want a fresh life for your family? See what Lumina has to offer for families.",
    },
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: Settlement,
            text: "Settlement",
        },
        description: "Want to become a pioneer and help build a new city from scratch? Learn how.",
    },
    //healthcare
    {
        // link: "",
        tag: {
            text: "Coming Soon",
            color: "white"
        },
        title: {
            icon: DnaHelix,
            text: "Healthcare",
        },
        description: "Learn about our healthcare system, and how we're revolutionising healthcare.",
    },
    //culture & history
    // {
    //     // link: "",
    //     tag: {
    //         text: "Coming Soon",
    //         color: "white"
    //     },
    //     title: {
    //         icon: Book,
    //         text: "Culture & History",
    //     },
    //     description: "Learn about the history of Lumina, and how we're building a new culture.",
    // }
]

export const all_links = [...two_wide, ...three_wide]