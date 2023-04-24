import { createClient, type TypedDocumentNode, type Client as URLQLCLient } from "@urql/core"
import { PUBLIC_GRAPH_ENDPOINT } from "$env/static/public"
import type { AnyVariables } from "@urql/core/dist/types/types"
import { UserStore } from "./user_store"

export type GraphClient = ReturnType<typeof init_urql>

export const init_urql = (user_store: UserStore) => Object.assign(createClient({
    url: PUBLIC_GRAPH_ENDPOINT,
    fetch: (url, options = {}) => {
        if (user_store.auth_token) {
            options.headers = {
                ...options.headers,
                Authorization: user_store.auth_token
            }
        }
        return fetch(url, options)
    },
}), {
    async gquery<Data = unknown, Variables extends AnyVariables = AnyVariables>(
        this: URLQLCLient,
        query: TypedDocumentNode<Data, Variables>,
        variables: Variables
    ) {
        const res = await this.query(query, variables).toPromise()

        return res
    },
    async gmutation<Data = unknown, Variables extends AnyVariables = AnyVariables>(
        this: URLQLCLient,
        query: TypedDocumentNode<Data, Variables>,
        variables: Variables
    ) {
        const res = await this.mutation(query, variables).toPromise()
        return res
    }
})