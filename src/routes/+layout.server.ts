import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ cookies }) => {
    return {
        auth_token: cookies.get("token") || null,
    }
}