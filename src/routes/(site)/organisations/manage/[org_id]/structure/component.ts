
import Account from "svelte-material-icons/Account.svelte"
import AccountGroup from "svelte-material-icons/AccountGroup.svelte"
import StateMachine from "svelte-material-icons/StateMachine.svelte"

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

export const icons = {
    Role: AccountGroup,
    Body: StateMachine,
    Position: Account
}
