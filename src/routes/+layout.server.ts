export async function load ({ cookies }) {
    return {
        auth_token: cookies.get("token") || null,
    }
}