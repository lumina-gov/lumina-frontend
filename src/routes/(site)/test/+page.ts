import { env } from "$env/dynamic/public"
import { fetchOneEntry } from "@builder.io/sdk-svelte"

export async function load({ url }) {

    const content = await fetchOneEntry({
        model: "page",
        apiKey: env.PUBLIC_BUILDERIO_KEY,
        userAttributes: {
            urlPath: url.pathname,
        },
    })

    return {
        content
    }
}