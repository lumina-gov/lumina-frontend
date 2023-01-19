import { createClient, type TypedDocumentNode, type Client as URLQLCLient } from "@urql/core"
import { PUBLIC_GRAPH_ENDPOINT } from "$env/static/public"
import type { AnyVariables } from "@urql/core/dist/types/types"
import { error } from "@sveltejs/kit"

export type GraphClient = ReturnType<typeof init_urql>

export const init_urql = (token: string | undefined) => Object.assign(createClient({
	url: PUBLIC_GRAPH_ENDPOINT,
	fetchOptions: {
		headers: token ? ({
			Authorization: token
		}) : undefined
	}
}), {
	async gquery<Data = unknown, Variables extends AnyVariables = AnyVariables>(
		this: URLQLCLient,
		query: TypedDocumentNode<Data, Variables>,
		variables: Variables
	) {
		const res = await this.query(query, variables).toPromise()
		if (res.error || !res.data)
			throw error(501, {
				message: res.error?.message ?? "No data returned!",
				code: "GRAPHQL_ERROR",
			})
		return res
	},
	async gmutation<Data = unknown, Variables extends AnyVariables = AnyVariables>(
		this: URLQLCLient,
		query: TypedDocumentNode<Data, Variables>,
		variables: Variables
	) {
		const res = await this.mutation(query, variables).toPromise()
		if (res.error || !res.data)
			throw error(501, {
				message: res.error?.message ?? "No data returned!",
				code: "GRAPHQL_ERROR",
			})
		return res
	}
})