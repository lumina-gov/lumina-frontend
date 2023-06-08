import { NewsPostDocument } from "$lib/hygraph/graphql-types.js"

import { error } from "@sveltejs/kit"

export async function load({ params, parent }) {
    const stores = await parent()

    const { data, error: gqlError } = await stores.hygraph.gquery(NewsPostDocument, {
        slug: params.slug
    })

    if (gqlError || !data) {
        stores.alerts.create_alert("error", gqlError?.message || "Error loading news post")
        throw error(500, {
            message: "Error loading news post",
            code: "ERROR_LOADING_NEWS_POST"
        })
    }

    if (!data.newsPost) {
        throw error(404, {
            message: "News post not found",
            code: "NEWS_POST_NOT_FOUND"
        })
    }

    return {
        post: data.newsPost
    }
}
