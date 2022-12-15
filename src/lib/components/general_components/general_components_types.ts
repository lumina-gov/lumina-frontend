import type { SvelteComponent } from "svelte"

export type InfoBoxType = {
    icon: typeof SvelteComponent,
    heading: string,
    paragraphs: string[],
}

export type IAmAPickerType = {
    heading: string,
    choices: {text: string, icon: typeof SvelteComponent}[]
}

export type ScrollableDisplayCardType = {
    type: string,
    icon: typeof SvelteComponent,
    title: string,
    description: string,
    tags: { question: string, answerText: string, answerIcon: any, color: string }[]
}

export type HeaderInfoType = {
    heading: string,
    icon: typeof SvelteComponent,
    paragraphs: string[]
}