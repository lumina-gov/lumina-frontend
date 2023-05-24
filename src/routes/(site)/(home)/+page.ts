import { UserCountDocument } from "$lib/graphql/graphql-types"
import { MessageType } from "$lib/types/message"

export async function load({ parent }) {
    const { graph, alerts } = await parent()

    const { data, error } = await graph.gquery(UserCountDocument, {})


    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
    }
    return {
        user_count: data?.user_count || 2000,
    }
}