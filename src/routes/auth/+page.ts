import { GetAuthAppDocument } from "$lib/graphql/graphql-types.js"
import { MessageType } from "$lib/types/message.js"
import { error } from "@sveltejs/kit"


export async function load ({ parent, url }) {
    const data = await parent()

    const slug = url.searchParams.get("app-slug")
    const redirect = url.searchParams.get("redirect")

    if (typeof slug === "string") {
        const res = await data.graph.gquery(GetAuthAppDocument, {
            slug,
        })

        if(!res.data || res.error) {
            data.alerts.create_alert(MessageType.Error, res.error?.message ?? "Failed to load app")
        }

        const app = res.data?.auth_app

        if (!app) {
            data.alerts.create_alert(MessageType.Error, "App not found")
            throw error(404, {
                code: "APP_NOT_FOUND",
                message: "App not found",
            })
        }

        if (!redirect) {
            data.alerts.create_alert(MessageType.Error, "Redirect not specified")
            throw error(400, {
                code: "REDIRECT_NOT_SPECIFIED",
                message: "Redirect not specified",
            })
        }

        if (!app.redirect_hostnames.includes(new URL(redirect).hostname)) {
            data.alerts.create_alert(MessageType.Error, `Redirect hostname not allowed for ${app.name}`)
            throw error(400, {
                code: "INVALID_REDIRECT_HOSTNAME",
                message: `Redirect hostname not allowed for ${app.name}`,
            })
        }

        return {
            app_info: {
                app,
                redirect,
                slug,
            }
        }
    }

    return {}
}