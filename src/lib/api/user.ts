import { MessageType } from "$lib/types/message"
import type { User } from "$lib/types/user"
import type { AlertsStore } from "$lib/stores/alerts"
import type { GraphStore } from "$lib/stores/graph"

export async function get_user(graph: GraphStore, alerts: AlertsStore): Promise<User | null> {
    const { data: { me }, errors } = await graph.req<{ me?: User }>`
            message {
                me {
                    _id
                    email
                    first_name
                    last_name
                    roles
                    referrals
                    citizenship_status
                }
            }
        `

    if (errors.length > 0) {
        errors.map(error => alerts.create_alert(MessageType.Error, error))
        graph.auth_token = null
    } else if (me) {
        return me
    }
    return null
}