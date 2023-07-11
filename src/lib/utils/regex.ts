export function escape_regex(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
}

export function regex_search(text: string): RegExp {
    return new RegExp(escape_regex(text), "ig")
}