import type Tag from "$lib/display/Tag.svelte"
import type { Prop } from "$lib/utils/typed_props"
import type { SvelteComponent } from "svelte"

export type HubType = {
    link?: string,
    tag: {
        text: string,
        color: Prop<Tag, "color">,
    },
    title: {
        icon: typeof SvelteComponent,
        text: string,
    },
    description: string,
}