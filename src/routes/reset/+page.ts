import { error } from "@sveltejs/kit"


export async function load ({ url }) {
    const email = url.searchParams.get("email")
    const token = url.searchParams.get("token")

    if (!email || !token) {
        throw error(400, {
            message: "Email or token not specified",
            code: "EMAIL_OR_TOKEN_NOT_SPECIFIED",
        })
    }

    return {
        email,
        token,
    }
}