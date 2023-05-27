import { Reset_PasswordDocument, Reset_To_New_PasswordDocument } from "$lib/graphql/graphql-types"
import type { GraphClient } from "$lib/stores/graphql"

export async function send_reset_password_link(graph: GraphClient, email: string): Promise<void> {
    const {  error } = await graph.gquery(Reset_PasswordDocument, {
        email: email.toLowerCase()
    })
    const user_nonexist_err = error?.graphQLErrors.find(err => err?.extensions?.code === "USER_NOT_FOUND")

    if(user_nonexist_err !== undefined) {
        throw new UserNotFoundError()
    }
    if (error) {
        throw error
    }
}

export async function reset_password(graph: GraphClient, token_id: string, new_password: string): Promise<void> {
    const {  error } = await graph.gquery(Reset_To_New_PasswordDocument, {
        token_id,
        new_password
    })
    const password_too_short_error = error?.graphQLErrors.find(err => err?.extensions?.code === "PASSWORD_TOO_SHORT")
    const token_not_found_error = error?.graphQLErrors.find(err => err?.extensions?.code === "TOKEN_NOT_FOUND")
    if(password_too_short_error !== undefined) {
        throw new PasswordLengthError()
    }

    if(token_not_found_error !== undefined) {
        throw new TokenError
    }
    if (error) {
        throw error
    }
}


export class PasswordLengthError extends Error {
    constructor() {
        super("password needs to be at least 8 characters long")
        Object.setPrototypeOf(this, PasswordLengthError.prototype)
    }
}

export class TokenError extends Error {
    constructor() {
        super("invalid token please double check the link")
        Object.setPrototypeOf(this, TokenError.prototype)
    }
}

export class UserNotFoundError extends Error {
    constructor() {
        super("A user with that email has not been found, please try again.")
        Object.setPrototypeOf(this, UserNotFoundError.prototype)
    }
}