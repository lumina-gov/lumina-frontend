import { createClient, type TypedDocumentNode } from "@urql/core"
import { PUBLIC_GRAPH_ENDPOINT } from "$env/static/public"
import type { AnyVariables } from "@urql/core/dist/types/types"
import { error } from "@sveltejs/kit"

const urql = createClient({
	url: PUBLIC_GRAPH_ENDPOINT,
})

export const gquery = async <
	Data = unknown,
	Variables extends AnyVariables = AnyVariables
>(
	query: TypedDocumentNode<Data, Variables>,
	variables: Variables
) => {
	const res = await urql.query(query, variables).toPromise()
	if (res.error || !res.data)
		throw error(501, {
			message: res.error?.message ?? "No data returned!",
			code: "GRAPHQL_ERROR",
		})
	return res
}

export const gmutation = async <
	Data = unknown,
	Variables extends AnyVariables = AnyVariables
>(
	query: TypedDocumentNode<Data, Variables>,
	variables: Variables
) => {
	const res = await urql.mutation(query, variables).toPromise()
	if (res.error || !res.data)
		throw error(501, {
			message: res.error?.message ?? "No data returned!",
			code: "GRAPHQL_ERROR",
		})
	return res
}
