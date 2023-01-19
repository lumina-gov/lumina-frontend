import type { PageLoad } from "./$types"
import { ApplicationType } from "$lib/gql/graphql"
import { error } from "@sveltejs/kit"

export const load: PageLoad = async ({ params }) => {
    const type = toApplicationType(params.app_type.toUpperCase())
    if (type == null) throw error(404, "Not found")
    else return {
        application_type: type,
    }
}

function toApplicationType(str: string): ApplicationType | null {
    if (Object.values(ApplicationType).includes(str as ApplicationType))
        return str as ApplicationType
    return null
}