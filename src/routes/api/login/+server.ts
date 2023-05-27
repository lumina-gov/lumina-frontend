import { env } from "$env/dynamic/private"
import { LoginDocument } from "$lib/graphql/graphql-types"
import { init_urql, } from "$lib/stores/graphql"
import { user_store_init } from "$lib/stores/user_store"
import { error } from "@sveltejs/kit"

export async function POST({ request }) {
    const json = await request.json() as { email?: string, password?: string, scopes?: string[] }

    if (!json.email || !json.password) {
        throw error(400, {
            code: "MISSING_CREDENTIALS",
            message: "Missing username or password",
        })
    }
    const scopes = json.scopes && Array.isArray(json.scopes) ? json.scopes : ["*"]
    const user_store = user_store_init(null)
    const graph = init_urql(user_store)

    const res  = await graph.gmutation(LoginDocument, {
        email: json.email,
        password: json.password,
        scopes,
        app_secret: env.LUMINA_APP_SECRET
    })

    return new Response(JSON.stringify({
        data: res.data,
        errors: res.error?.graphQLErrors
    }))
}