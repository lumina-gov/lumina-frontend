import { reset_password, PasswordLengthError, TokenError } from "$lib/api/password.js"
import { init_urql } from "$lib/stores/graphql"
import { error } from "@sveltejs/kit"


const graphql = init_urql({ auth_token: null, user: null })
/** @type {import('./$types').RequestHandler} */
export async function PATCH({ url, request }) {
    const token = url.searchParams.get("token")
    const new_password = (await request.formData()).get("new_password")


    if (!token || typeof (token) !== "string") {
        throw error(400, "no token was provided")
    }

    if (!new_password || typeof (new_password) !== "string") {
        throw error(400, "no password provided")
    }
    try {
        reset_password(graphql, token, new_password)
    } catch (response_error) {
        if (response_error instanceof PasswordLengthError || response_error instanceof TokenError) {
            throw error(400, response_error.message)
        }

        throw error(500, "something went wrong, please try again.")
    }


    return new Response("", { status: 201 })
}