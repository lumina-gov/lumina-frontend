import { env } from "$env/dynamic/private"
import { LoginDocument } from "$lib/graphql/graphql-types"
import { init_urql_lumina, } from "$lib/stores/graphql"
import { user_store_init } from "$lib/stores/user_store"
import { error, json } from "@sveltejs/kit"

export async function POST({ request }) {
    const req_json = await request.json() as { email?: string, password?: string, scopes?: string[] }

    if (!req_json.email || !req_json.password) {
        throw error(400, {
            code: "MISSING_CREDENTIALS",
            message: "Missing username or password",
        })
    }
    const scopes = req_json.scopes && Array.isArray(req_json.scopes) ? req_json.scopes : ["*"]
    const user_store = user_store_init(null)
    const graph = init_urql_lumina(user_store)

    const res  = await graph.gmutation(LoginDocument, {
        email: req_json.email,
        password: req_json.password,
        scopes,
        app_secret: env.LUMINA_APP_SECRET
    })

    return json({
        data: res.data,
        errors: res.error?.graphQLErrors
    })
}