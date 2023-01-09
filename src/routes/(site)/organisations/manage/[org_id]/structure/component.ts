
export type Component = ({
    type: "Body",
} | {
    type: "Position",
} | {
    type: "Role",
}) & {
    id: string,
    name: string
    children: string[]
}