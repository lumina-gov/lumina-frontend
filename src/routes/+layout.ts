import { alerts_init } from "$lib/stores/alerts"
import type { LayoutLoad } from "./$types"
import { init_urql } from "$lib/stores/graphql"
import { get_me, InvalidTokenError } from "$lib/api/user"
import { browser } from "$app/environment"
import { set_cookie } from "$lib/utils/cookie"
import { user_store_init } from "$lib/stores/user_store"

export const load: LayoutLoad = async ({ data: { auth_token  }}) => {
    const user_store = user_store_init(auth_token)
    const graph = init_urql(user_store)
    const alerts = alerts_init([])

    try {
        user_store.user = await get_me(graph, alerts)
    } catch (e) {
        if (browser && e instanceof InvalidTokenError) {
            set_cookie("token", null)
        }
        user_store.user = null
        user_store.auth_token = null
    }

    return {
        user_store,
        alerts,
        graph,
    }
}
