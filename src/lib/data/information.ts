import type { Props } from "$lib/utils/typed_props"
import type ServiceCard from "$lib/components/ServiceCard.svelte"
import Telescope from "svelte-material-icons/Telescope.svelte"
import Pillar from "svelte-material-icons/Pillar.svelte"
import Scale from "svelte-material-icons/ScaleBalance.svelte"
import FormatListBulleted from "svelte-material-icons/FormatListBulleted.svelte"
import Capitol from "$lib/icons/Capitol.svelte"
import IdentityCard from "svelte-material-icons/CardAccountDetails.svelte"
import History from "svelte-material-icons/History.svelte"
import Culture from "svelte-material-icons/HumanHandsup.svelte"
import Bank from "svelte-material-icons/Bank.svelte"
import Vote from "svelte-material-icons/Vote.svelte"
import Money from "svelte-material-icons/Cash.svelte"
import Tax from "svelte-material-icons/Taxi.svelte"
import Family from "svelte-material-icons/HumanMaleFemaleChild.svelte"
import Hospital from "svelte-material-icons/Hospital.svelte"




export const information: Props<ServiceCard>[] = [
    {
        title: "Mission & Vision",
        description: "Learn about the mission and vision for Lumina, and how we plan to achieve it.",
        href: "/mission-and-vision",
        icon: Telescope,
        tag: {
            color: "blue",
            text: "Information"
        },
    },
    {
        title: "Principles & Values",
        description: "Our principles and values define the emotional, moral and spiritual core of our society.",
        // href: "/principles-and-values",
        icon: Pillar,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Rights & Duties",
        description: "Learn about your rights and duties, required for our society to function.",
        // href: "/rights-and-duties",
        icon: Scale,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Government Directory",
        description: "Learn about the government officials of Lumina, and how to contact them.",
        href: "/government-directory",
        icon: FormatListBulleted,
        tag: {
            color: "blue",
            text: "Information"
        },
    },
    {
        title: "Government System",
        description: "Learn about the government structure of Lumina, and how it works.",
        // href: "/government-system",
        icon: Capitol,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Media & Press",
        description: "Are you a journalist? Looking to get in touch with us? Here's how.",
        href: "/media-and-press",
        icon: IdentityCard,
        tag: {
            color: "blue",
            text: "Information"
        },
    },
    {
        title: "History",
        description: "Learn about the history of Lumina, and how we got to where we are today.",
        // href: "/history",
        icon: History,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Culture",
        description: "Learn about the culture of Lumina, and how it shapes our society.",
        // href: "/culture",
        icon: Culture,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Budgeting",
        description: "Learn how Lumina gives the power to citizens to decide where their tax goes.",
        // href: "/budgeting",
        icon: Bank,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Direct Democracy",
        description: "Learn about Lumina's revolutionary direct democracy, where the citizens decide.",
        // href: "/direct-democracy",
        icon: Vote,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Healthcare",
        description: "Learn about our healthcarer system, and how we're revolutionizing healthcare.",
        // href: "/healthcare",
        icon: Hospital,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Monetary System",
        description: "Find out what makes our monetary system stable, and sustainable.",
        // href: "/monetary-system",
        icon: Money,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Tax System",
        description: "Learn about Lumina's simple and automated tax system and how it makes life easier.",
        // href: "/tax-system",
        icon: Tax,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Family",
        description: "Learn about the family system of Lumina, and how it shapes our society.",
        // href: "/family",
        icon: Family,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
]
