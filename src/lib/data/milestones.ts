import type { SvelteComponent } from "svelte"
import HumanHandsup from "svelte-material-icons/HumanHandsup.svelte"

type Milestone = {
    title: string,
    description: string,
    date: Date,
    icon: typeof SvelteComponent
    contributors: MilestoneContributor[]
    tags: string[]
}

type MilestoneContributor = {
    name: string,
    description: string,
}

export const milestones : Milestone[] = [
    {
        title: "Added Milestones",
        description: "Klepsi added milestones",
        date: new Date(1684750729770),
        icon: HumanHandsup,
        contributors : [
            {
                name: "Klepsi",
                description: "A skilled rust developer working to make the world a better place."
            }
        ],
        tags: ["cool", "amazing"]
    }
]