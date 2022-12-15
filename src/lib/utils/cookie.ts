export function set_cookie (name: string, value: string | null) {
    document.cookie = `${name}=${value ? encodeURIComponent(value) : ""};path=/;Domain=${window.location.hostname};${value ? "" : "Max-Age=0"}`
}

export function delete_cookie(name: string) {
    set_cookie(name, null)
}

export function get_cookie_from_document (cookie_name: string): string | null {
    return get_cookies_from_string(cookie_name, document.cookie)
}

export function get_cookies_from_string(cookie_name: string, cookies: string): string | null {
    const name = cookie_name + "="
    const decodedCookie = decodeURIComponent(cookies)
    const ca = decodedCookie.split(";")
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return null
}

