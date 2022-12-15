import type { SvelteComponent } from "svelte"

export type InfoCardType = {
    icon: typeof SvelteComponent,
    text: string,
}

export type JobType = {
    title: string,
    icon: typeof SvelteComponent,
    attributes: InfoCardType[]
    link?: string,
}

export type JobField = {
    title: string,
    jobs: JobType[],
}
