import { AlertsStore, alerts_init } from "$lib/stores/alerts"
import type { LayoutLoad } from "./$types"
import { GraphClient, init_urql } from "$lib/stores/graphql"
import { User } from "$lib/gql/graphql"
import { graphql } from "$lib/gql"
import { MessageType } from "$lib/types/message"

export const load: LayoutLoad = async ({ data: { auth_token  } }) => {
    const graph = init_urql(auth_token)
    const alerts = alerts_init([])

    return {
        user_wrapper: {
            user: await get_me(graph, alerts),
        },
        alerts,
        graph,
        auth_token
    }
}

async function get_me(graph: GraphClient, alerts: AlertsStore): Promise<User | null> {
    const USER_QUERY = graphql(`
        query me {
            me {
            id
            email
            first_name
            last_name
            roles
            referrals
            citizenship_status
            }
        }`)

    const { data, error } = await graph.gquery(USER_QUERY, {})

    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
        return null
    }
    return data?.me ?? null
}