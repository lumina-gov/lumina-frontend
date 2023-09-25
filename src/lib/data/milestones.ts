import LightUniversity from "$lib/icons/LightUniversity.svelte"
import Lumina from "$lib/icons/Lumina.svelte"

import type { IconComponent } from "$lib/utils/icon_type"
import Database from "svelte-material-icons/Database.svelte"
import ListBox from "svelte-material-icons/ListBox.svelte"
import NewspaperVariantOutline from "svelte-material-icons/NewspaperVariantOutline.svelte"
import PassportBiometric from "svelte-material-icons/PassportBiometric.svelte"
import Rocket from "svelte-material-icons/Rocket.svelte"
import ScriptOutline from "svelte-material-icons/ScriptOutline.svelte"
import Web from "svelte-material-icons/Web.svelte"

export enum Filter {
    Service = "Service",
    Social = "Social",
    Partnership = "Partnership",
    Technological = "Technological",
}

export type Milestone = {
    title: string,
    description: string,
    date: Date,
    icon: IconComponent
    contributors: MilestoneContributor[]
    tags: Filter[]
}

export type MilestoneContributor = {
    name: string,
    description: string,
}

export const milestones: Milestone[] = [
    {
        title: "Milestones Page",
        description: "Creation of a page on the Lumina website that tracks the progress and completion of major milestones.",
        date: new Date("2023-05-28"),
        icon: Rocket,
        contributors: [
            {
                name: "N.Dale",
                description: "Developed the user interface for the Milestones Page",
            },
            {
                name: "Albert Marashi",
                description: "Designed the Milestones Page and curated its content",
            },
        ],
        tags: [Filter.Technological]
    },
    {
        title: "Lumina University",
        description: "Establishment of Lumina University, providing high-quality education to residents of Lumina.",
        date: new Date("2023-05-20"),
        icon: LightUniversity,
        contributors: [
            {
                name: "Romeo",
                description: "Worked on frontend and backend development for the establishment of Lumina University",
            },
            {
                name: "Albert Marashi",
                description: "Led frontend and backend development, as well as UI design, for Lumina University",
            },
        ],
        tags: [Filter.Service, Filter.Social]
    },
    {
        title: "Rewrite of backend architecture",
        description: "A comprehensive overhaul of Lumina's backend architecture, improving system efficiency and reliability.",
        date: new Date("2023-04-15"),
        icon: Database,
        contributors: [
            {
                name: "Discape",
                description: "Developed a serverless GraphQL architecture for improved backend performance",
            },
            {
                name: "Albert Marashi",
                description: "Led the development of service architecture during the backend overhaul",
            },
        ],
        tags: [Filter.Technological]
    },
    {
        title: "Citizenship Applications system",
        description: "Establishment of a system for processing citizenship applications, an essential step in Lumina's growth.",
        date: new Date("2023-03-25"),
        icon: PassportBiometric,
        contributors: [
            {
                name: "Discape",
                description: "Developed the backend of the applications system and set up a continuous deployment system",
            },
            {
                name: "Albert Marashi",
                description: "Worked on both frontend and backend development of the applications system, as well as its continuous deployment system",
            },
        ],
        tags: [Filter.Service]
    },
    {
        title: "Mission & Vision page",
        description: "Creation of the Mission & Vision page on the Lumina website, detailing Lumina's aspirations and plans.",
        date: new Date("2023-03-10"),
        icon: Lumina,
        contributors: [
            {
                name: "Albert Marashi",
                description: "Designed, developed and curated the content for the Mission & Vision page",
            },
        ],
        tags: [Filter.Social]
    },
    {
        title: "Government Directory",
        description: "Creation of a comprehensive government directory, providing clear information about Lumina's governmental structure.",
        date: new Date("2023-02-28"),
        icon: ListBox,
        contributors: [
            {
                name: "Albert Marashi",
                description: "Designed the directory and defined the structure of Lumina's government",
            },
            {
                name: "Timothy Schoonover",
                description: "Worked on the development of Lumina's government structure",
            },
        ],
        tags: [Filter.Service]
    },
    {
        title: "Light Square",
        description: "Completion of Light Square, Lumina's official newsletter.",
        date: new Date("2023-01-03"),
        icon: NewspaperVariantOutline,
        contributors: [
            {
                name: "Albert Marashi",
                description: "Led the design and development of Light Square, managing its successful completion",
            },
        ],
        tags: [Filter.Service]
    },
    {
        title: "Lumina Website Launch",
        description: "Launch of the official Lumina website, the primary source of information about Lumina.",
        date: new Date("2022-12-11"),
        icon: Web,
        contributors: [
            {
                name: "Romeo",
                description: "Led frontend development efforts to create the website interface",
            },
            {
                name: "Albert Marashi",
                description: "Coordinated and oversaw the website's development process",
            },
            {
                name: "Lenard",
                description: "Assisted in frontend development, contributing to the creation of various website features",
            },
        ],
        tags: [Filter.Technological]
    },
    {
        title: "Constitution",
        description: "Drafting and finalizing the constitution for the Autonomous Zone.",
        date: new Date("2022-08-15"),
        icon: ScriptOutline,
        contributors: [
            {
                name: "Timothy Schoonover",
                description: "Drafted key sections of the constitution",
            },
            {
                name: "Albert Marashi",
                description: "Drafted key sections of the constitution",
            },
        ],
        tags: [Filter.Social]
    },
    // {
    //     title: "Password Reset system (WIP)",
    //     description: "Development of a system to allow users to securely reset their passwords.",
    //     date: new Date(),
    //     icon: Web,
    //     contributors: [
    //         {
    //             name: "N.Dale",
    //             description: "Developing the backend for the password reset system",
    //         },
    //         {
    //             name: "Albert Marashi",
    //             description: "Designing the user interface and flow for the password reset system",
    //         },
    //     ],
    //     tags: [Filter.Service]
    // },
    // {
    //     title: "Rights & Duties (WIP)",
    //     description: "Defining and publishing the rights and duties of Lumina's citizens.",
    //     date: new Date(),
    //     icon: Web,
    //     contributors: [
    //         {
    //             name: "N.Dale",
    //             description: "Developing the user interface to present the rights and duties information",
    //         },
    //         {
    //             name: "Albert Marashi",
    //             description: "Designing the layout and creating content for the rights and duties of Lumina's citizens",
    //         },
    //     ],
    //     tags: [Filter.Social]
    // }
]