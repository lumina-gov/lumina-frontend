import { OrganisationsDocument } from "$lib/hygraph/graphql-types.js"
import { MessageType } from "$lib/types/message.js"
import { error } from "@sveltejs/kit"


export async function load({ parent }) {
    const stores = await parent()

    const { data, error: gqlError } = await stores.hygraph.gquery(OrganisationsDocument, {})

    if (gqlError || !data) {
        stores.alerts.create_alert(MessageType.Error, gqlError?.message || "Error loading news posts")
        throw error(500, {
            message: "Error loading news posts",
            code: "ERROR_LOADING_NEWS_POSTS"
        })
    }

    return {
        organisations: data.organisations,
    }
}