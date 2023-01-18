import { MessageType } from "$lib/types/message"
import type { PageLoad } from "./$types"
// TODOg
export const load = (async ({ parent }) => {
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
        user_count: user_count || 2000,
    }
}) satisfies PageLoad