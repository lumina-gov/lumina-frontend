import { graphql } from "$lib/gql"
import { MeQuery } from "$lib/gql/graphql"
import { AlertsStore } from "$lib/stores/alerts"
import { GraphClient } from "$lib/stores/graphql"
import { MessageType } from "$lib/types/message"

export class InvalidTokenError extends Error {
    constructor() {
        super("InvalidTokenError")
    }
}

export async function get_me(graph: GraphClient, alerts: AlertsStore): Promise<MeQuery["me"] | null> {
    const USER_QUERY = graphql(`
        query me {
            me {
                id
                email
                first_name
                last_name
                roles
                referral_count
                citizenship_status
            }
        }`)

    const { data, error  } = await graph.gquery(USER_QUERY, {})

    // find any errors that are related to invalid auth token
    if(error?.graphQLErrors.find(err => err?.extensions?.code === "INVALID_TOKEN") !== undefined) {
        alerts.create_alert(MessageType.Info, "Your session has expired. Please sign in again.")
        throw new InvalidTokenError()
    }

    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
        return null
    }
    return data?.me ?? null
}