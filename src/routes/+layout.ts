import { alerts_init } from "$lib/stores/alerts"
import { graph_init } from "$lib/stores/graph"
import type { LayoutLoad } from "./$types"
import { get_user } from "$lib/api/user"
import type { User } from "$lib/types/user"
import { error } from "@sveltejs/kit"

export const load: LayoutLoad = async load_event => {
    const auth_token = load_event.data?.auth_token || null
    const domain = load_event.data?.api_domain as string

    if (!domain) {
        throw error(500, {
            message: "No Lumina API domain provided",
            code: "lumina_api_domain_missing",
        })
    }

    const graph = graph_init(auth_token, domain)
    const alerts = alerts_init([])
    // const user = user_init(null)

    let user: User | null = null

    if (graph.auth_token) {
        user = await get_user(graph, alerts)
    }

    return {
        user_wrapper: {
            user,
        },
        alerts,
        graph
    }
}