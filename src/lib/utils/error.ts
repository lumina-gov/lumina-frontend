export function error_to_string (error) {
    return `${error.message}${error.location ? ` (${error.location})` : ''}`
}