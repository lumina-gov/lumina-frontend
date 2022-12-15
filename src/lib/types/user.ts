
export type User = {
    _id: string
    email: string
    first_name: string
    last_name: string
    roles: string[]
    referrals: number,
    citizenship_status: string | null
}