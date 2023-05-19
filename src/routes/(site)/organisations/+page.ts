export async function load() {
    const organisations = [
        {
            name: "Human Services",
            slug: "human-services",
            type: "Department",
            status: "Active",
            logo: "/images/organisations/human-services.png",
        },
        {
            name: "Justice",
            slug: "justice",
            type: "Department",
            status: "Active",
            logo: "/images/organisations/justice.png",
        }
    ]

    return {
        organisations,
    }
}
