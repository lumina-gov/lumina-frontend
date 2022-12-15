import type { Message, MessageType } from "$lib/types/message"
import type { Writable } from "svelte/store"
import { writable } from "svelte/store"

export type AlertsStore = {
    create_alert: (type: MessageType, text: string) => void,
    store: Writable<Message[]>
}

export const alerts_init = (messages: Message[]): AlertsStore => {
    const store = writable(messages)

    return {
        store,
        create_alert (type: MessageType, text: string) {
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