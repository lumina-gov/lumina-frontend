import type { PageLoad } from "./$types"
import { MessageType } from "$lib/types/message"

export const load: PageLoad = async function load({ parent }) {
    const data = await parent()

    const { data: { user_count }, errors } = await data.graph.req<{ user_count?: number }>`
        message {
            user_count
        }
    `

    if (errors.length > 0) {
        errors.map(error => data.alerts.create_alert(MessageType.Error, error))
    }

    return {
        ...data,
        user_count: user_count || 2000,
    }
}
