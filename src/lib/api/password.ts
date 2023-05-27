import { Reset_PasswordDocument, Reset_To_New_PasswordDocument } from "$lib/graphql/graphql-types"
import type { AlertsStore } from "$lib/stores/alerts"
import type { GraphClient } from "$lib/stores/graphql"
import { MessageType } from "$lib/types/message"

export async function send_reset_password_link(graph: GraphClient, alerts: AlertsStore, email: string): Promise<void> {
    const {  error } = await graph.gquery(Reset_PasswordDocument, {
        email: email.toLowerCase()
    })
    const user_nonexist_err = error?.graphQLErrors.find(err => err?.extensions?.code === "USER_NOT_FOUND")

    if(user_nonexist_err !== undefined) {
        alerts.create_alert(MessageType.Info, "A user with that email has not been found, please try again.")
        throw user_nonexist_err
    }
    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
    }
}

export async function reset_password(graph: GraphClient, alerts: AlertsStore, token_id: string, new_password: string): Promise<void> {
    const {  error } = await graph.gquery(Reset_To_New_PasswordDocument, {
        token_id,
        new_password
    })
    const password_too_short_error = error?.graphQLErrors.find(err => err?.extensions?.code === "PASSWORD_TOO_SHORT")
    const token_not_found_error = error?.graphQLErrors.find(err => err?.extensions?.code === "TOKEN_NOT_FOUND")
    if(password_too_short_error !== undefined) {
        alerts.create_alert(MessageType.Info, "password needs to be at least 8 characters long")
        throw password_too_short_error
    }

    if(token_not_found_error !== undefined) {
        alerts.create_alert(MessageType.Error, "invalid token please double check the link")
        throw token_not_found_error
    }
    if (error) {
        alerts.create_alert(MessageType.Error, error.message)
    }
}