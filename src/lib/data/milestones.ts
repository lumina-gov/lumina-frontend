import type { SvelteComponent } from "svelte"
import HumanHandsup from "svelte-material-icons/HumanHandsup.svelte"

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
    icon: typeof SvelteComponent
    contributors: MilestoneContributor[]
    tags: Filter[]
}

export type MilestoneContributor = {
    name: string,
    description: string,
}

export const milestones : Milestone[] = [
    {
        title: "Added Milestones",
        description: "Milestone description lorem ipsum bla htjsa jauteu ndaugh  Description lorem ipsum bla htjsa jauteu ndaugh  lorem ipsum bla ipsum bla htjsa ",
        date: new Date(1684750729770),
        icon: HumanHandsup,
        contributors : [
            {
                name: "Klepsi",
                description: "A skilled rust developer working to make the world a better place."
            }
        ],
        tags: []
    },
    {
        title: "Added Milestones",
        description: "Milestone description lorem ipsum bla htjsa jauteu ndaugh  Description lorem ipsum bla htjsa jauteu ndaugh  lorem ipsum bla ipsum bla htjsa ",
        date: new Date(1684750729770),
        icon: HumanHandsup,
        contributors : [
            {
                name: "Klepsi",
                description: "A skilled rust developer working to make the world a better place."
            }
        ],
        tags: []
    },
    {
        title: "Added Milestones",
        description: "Milestone description lorem ipsum bla htjsa jauteu ndaugh  Description lorem ipsum bla htjsa jauteu ndaugh  lorem ipsum bla ipsum bla htjsa ",
        date: new Date(1684750729770),
        icon: HumanHandsup,
        contributors : [
            {
                name: "Klepsi",
                description: "A skilled rust developer working to make the world a better place."
            }
        ],
        tags: []
    }
]