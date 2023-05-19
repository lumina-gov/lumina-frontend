import type { MeQuery } from "$lib/graphql/graphql-types"

export type UserStore = {
    auth_token: string | null,
    user: MeQuery["me"] | null,
}

export const user_store_init = (auth_token: string | null): UserStore => {
    const data = {
        user: null,
        auth_token,
    }

    return data
}