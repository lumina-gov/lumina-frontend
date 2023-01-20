import { graphql } from "$lib/gql"
import { MessageType } from "$lib/types/message"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ parent }) => {
    const { graph, alerts } = await parent()

    const { data, error } = await graph.gquery(graphql(`
        query user_count {
            user_count
        }`
    ), {})


    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
    }
    return {
        user_count: data?.user_count || 2000,
    }
}