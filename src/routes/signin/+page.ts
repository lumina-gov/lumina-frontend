import type { PageLoad } from "./$types"
import { error, redirect } from "@sveltejs/kit"

const allowed_hosts = ["localhost", "light-university.vercel.app"]

export const load: PageLoad = async function load({ parent, url }) {
    const data = await parent()

    let redirect_param = url.searchParams.get("redirect")
    if(redirect_param) {
        console.log(redirect_param)
        const redirect_url = new URL(redirect_param)
        if (!allowed_hosts.includes(redirect_url.hostname)) {
            throw error(400, {
                message: "Host redirect is not allowed",
                code: "INVALID_REDIRECT",
            })
        }
        redirect_param = redirect_url.toString()
    }

    if(data.user_store.user) {
        throw redirect(307, redirect_param ? redirect_param + "?token=" + data.user_store.auth_token : "/")
    }

    return {
        redirect: redirect_param,
    }
}
