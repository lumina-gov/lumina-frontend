import type { PageLoad } from "./$types"
import { redirect } from "@sveltejs/kit"

export const load: PageLoad = async function load({ parent }) {
    const data = await parent()

    if(data.user_wrapper.user) {
        throw redirect(307, "/dashboard")
    }

    return {}
}
