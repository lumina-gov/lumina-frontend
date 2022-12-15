
import { RustEnum } from "$lib/utils/enums/rust_enum"
import { error } from "@sveltejs/kit"

export type GraphStore = {
    req:<T>(type: TemplateStringsArray, ...text: Record<string, unknown>[]) => Promise<{ data: T, errors: string[]}>,
    auth_token: string | null
}

export const graph_init = (auth_token: string | null, api_domain: string | null): GraphStore => {
    return {
        auth_token,
        async req<T>(strings: TemplateStringsArray, ...variables: Record<string, unknown>[]) {
            try {
                const query = parse_inputs(strings, variables)

                const BACKENDAPI = api_domain ? `https://${api_domain}` : "http://localhost:81" // fallback to rust test http main.rs server
                const auth_token = this.auth_token

                const request = new Request(`${BACKENDAPI}/graph`, {
                    method: "POST",
                    body: JSON.stringify({
                        query,
                        auth_token
                    }),
                })

                const response = await fetch(request)

                return await response.json() as T
            } catch (err) {
                if (err instanceof Error) {
                    throw error(400, {
                        message: err.message,
                        code: "faulty_request",
                        stack: err.stack,
                        cause: err,
                    })
                }
                throw err
            }

        }
    }
}


function isPrimitive (test: unknown): test is string | number | boolean {
    return (test !== Object(test))
}

function isArray (test: unknown): test is unknown[] {
    return Array.isArray(test)
}

function isObject (test: unknown): test is Record<string, unknown> {
    return typeof test === "object" && !Array.isArray(test)
}

function parseArray (array: unknown[]): string {
    return "[" + array.map(variable => parse_variable(variable)).join(",\n") + "]"
}

function parseObject (obj: Record<string, unknown>): string {
    return "{\n" + Object.keys(obj).map(key => key + ": " + parse_variable(obj[key])).join(",\n") + "\n}"
}

export function parse_variable (variable: unknown): string {
    if(variable === null) {
        throw new Error("null is not a valid graph variable")
    }
    if (isPrimitive(variable)) {
        return JSON.stringify(variable)
    }
    if (variable instanceof RustEnum) {
        return variable.as_input()
    }
    if (isArray(variable)) {
        return parseArray(variable)
    }
    if (isObject(variable)) {
        return parseObject(variable)
    }
    throw new Error("Could not translate: " + variable)
}

export function parse_inputs (strings: TemplateStringsArray, variables: Record<string, unknown>[]): string {
    let query = ""

    for (const index in strings) {
        query += strings[index]
        const obj = variables[index]
        if (obj) query += Object.keys(obj).filter(key => obj[key] !== undefined).map(key => key + ": " + parse_variable(obj[key])).join(",\n")
    }

    return query
}