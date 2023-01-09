import type { PageLoad } from "./$types"

export const load: PageLoad = async function load() {
    return {
        organisation_types: [
            "Department",
            "Agency",
            "Company",
            "Association",
            "Non-profit",
            "Institution",
        ],
        organisation_activities: [
            "Education",
            "Software development",
            "Consulting",
            "Research",
        ],
    }
}
