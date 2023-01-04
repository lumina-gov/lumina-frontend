import type { Props } from "$lib/utils/typed_props"
import type ServiceCard from "$lib/components/ServiceCard.svelte"
import site_data from "./site_data"
import LightUniversity from "$lib/icons/LightUniversity.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import Cash from "svelte-material-icons/Cash.svelte"
import ChartPie from "svelte-material-icons/ChartPie.svelte"
import Bank from "svelte-material-icons/Bank.svelte"
import ScriptText from "svelte-material-icons/ScriptText.svelte"
import HammerScrewdriver from "svelte-material-icons/HammerScrewdriver.svelte"
import Discord from "svelte-material-icons/Discord.svelte"


export const services: Props<ServiceCard>[] = [
    // Join the Discord
    // Find a Job
    // Legislative Registry
    // Bank Accounts
    // View Demographics
    // Bank Accounts
    // Light University
    // Tax
    // Settlement
    {
        title: "Join the Discord",
        description: "Join the Discord to get involved and stay up to date",
        icon: Discord,
        tag: {
            color: "green",
            text: "Recommended"
        },
        href: site_data.socials.discord,
    },
    {
        title: "Find a Job",
        description: "Find a job to earn money and get involved in the community",
        icon: HammerScrewdriver,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Legislative Registry",
        description: "View the current legislative registry and vote on bills",
        icon: ScriptText,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Bank Accounts",
        description: "View, create, and manage your bank accounts",
        icon: Bank,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "View Demographics",
        description: "View the demographics of Lumina",
        icon: ChartPie,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Light University",
        description: "Learn about the history of Lumina and the Light",
        icon: LightUniversity,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Tax",
        description: "Pay your taxes and view your tax history",
        icon: Cash,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
    {
        title: "Settlement",
        description: "Settle your land and view your settlement history",
        icon: Settlement,
        tag: {
            color: "white",
            opacity: true,
            text: "Coming Soon"
        },
    },
]