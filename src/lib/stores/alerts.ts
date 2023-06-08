import type { Message } from "$lib/types/message"
import type { Writable } from "svelte/store"
import { writable } from "svelte/store"

export type AlertsStore = {
    create_alert: (type: Message["type"], text: string) => void,
    store: Writable<Message[]>
}

export const alerts_init = (messages: Message[]): AlertsStore => {
    const store = writable(messages)

    return {
        store,
        create_alert (type: Message["type"], text: string) {
            store.update(messages => {
                messages.push({
                    id: Symbol(),
                    text,
                    type
                })

                return messages
            })
        }
    }
}