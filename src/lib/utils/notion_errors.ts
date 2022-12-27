import { error } from "@sveltejs/kit"


export const has_no_properties = error(500, {
    message: "Page does not have properties",
    code: "NOTION_API_ERROR"
})