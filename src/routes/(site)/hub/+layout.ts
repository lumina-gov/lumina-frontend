import type { LayoutLoad } from "./$types"
import { redirect } from "@sveltejs/kit"
import type { User } from "$lib/types/user"

export const load: LayoutLoad = async function load({ parent }) {
    const data = await parent()

    if(!data.user_wrapper.user) {
        throw redirect(307, "/signin")
    }

    return {
        user_wrapper: data.user_wrapper as { user: User } // Tell svelte that the user is never null
    }
}
