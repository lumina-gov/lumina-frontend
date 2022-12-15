export function get_query (name: string): string | undefined {
    if(!window) throw new Error("Cannot get URL query string on server")
    const { search } = window.location
    const queryObj = Object.fromEntries(search
        .substring(1)
        .split("&")
        .map(val => val.split("=").map(val => decodeURI(val)))
    )
    return queryObj[name]
}

