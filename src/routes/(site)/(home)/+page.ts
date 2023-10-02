import { UserCountDocument } from "$lib/graphql/graphql-types"


export async function load({ parent }) {
    const { graph, alerts } = await parent()

    const { data, error } = await graph.gquery(UserCountDocument, {})


    if (error) {
        alerts.create_alert("error", error.message)
    }
    return {
        user_count: data?.user_count || 2000,
        // user_count_by_interval: data?.user_count_by_interval || [0],
    }
}