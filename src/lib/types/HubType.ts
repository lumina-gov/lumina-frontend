import type { IconComponent } from "$lib/utils/icon_type"

export type HubType = {
    link?: string,
    tag: {
        text: string,
        color: string,
    },
    title: {
        icon: IconComponent,
        text: string,
    },
    description: string,
}