import { ActDocument } from "$lib/hygraph/graphql-types.js"

import { error } from "@sveltejs/kit"

export async function load({ params, parent }) {
    const stores = await parent()

    const { data, error: gqlError } = await stores.hygraph.gquery(ActDocument, {
        slug: params.law
    })

    if (gqlError || !data) {
        stores.alerts.create_alert("error", gqlError?.message || "Error loading act")
        throw error(500, {
            message: "Error loading act",
            code: "ACT_LOAD_ERROR"
        })
    }

    if (!data.act) {
        throw error(404, {
            message: "Act not found",
            code: "ACT_NOT_FOUND"
        })
    }

    return {
        act: data.act
    }
}
