import { MeQuery } from "$lib/gql/graphql"

export type UserStore = {
    auth_token: string | null,
    user: MeQuery["me"]
}

export const user_store_init = (auth_token: string | null): UserStore => {
    const data = {
        user: null,
        auth_token,
    }

    return data
}