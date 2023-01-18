import { MessageType } from "$lib/types/message"
import type { User } from "$lib/gql/graphql"
import type { AlertsStore } from "$lib/stores/alerts"
import { graphql } from "$lib/gql"
import { gquery } from "$lib/graphql"

export async function get_user(alerts: AlertsStore): Promise<User | null> {
    const USER_QUERY = graphql(`
    query me {
        me {
          id
          email
          firstName
          lastName
          roles
          referrals
          citizenshipStatus
        }
      }`)

    const { data, error } = await gquery(USER_QUERY, {})

    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
        return null
    }
    return data?.me ?? null
}