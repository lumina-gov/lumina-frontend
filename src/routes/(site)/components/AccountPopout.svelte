<script lang="ts">
import Card from "$lib/cards/Card.svelte"
import Settings from "svelte-material-icons/Cog.svelte"
import Icon from "$lib/display/Icon.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import Profile from "$lib/display/Profile.svelte"
import { delete_cookie } from "$lib/utils/cookie"
import { goto, invalidateAll } from "$app/navigation"
import type { MeQuery } from "$lib/graphql/graphql-types"

export let user: NonNullable<MeQuery["me"]>
$: name = `${user.first_name} ${user?.last_name}`
$: email = user.email

async function logout() {
    delete_cookie("token")
    await invalidateAll()
    await goto("/")
}

</script>
<Card reset_bg={true}>
    <div class="account">
        <Profile size="48px"/>
        <div class="data">
            <span class="name">
                { name }
            </span>
            <span class="email">
                { email }
            </span>
        </div>
    </div>
    <div class="links">
        <a
            class="link"
            href="/account">
            <Icon
                --size="20px"
                icon={Settings}/>
            <span>
                Account Settings
            </span>
        </a>
        <div
            class="link red"
            role="button"
            tabindex="0"
            on:click={ logout }
            on:keypress={ e => {
                if (e.key === "Enter") logout()
            } }>
            <Icon
                --size="20px"
                icon={ExitToApp}/>
            <span>
                Log Out
            </span>
        </div>
    </div>
</Card>
<style>
.account {
    border-bottom: 1px solid color-mix(white, var(--dark-app), 12%);
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    & .data {
        display: flex;
        flex-direction: column;
        gap: 8px;
        line-height: 1;

        & .name {
            font-size: 18px;
            font-weight: 500;
        }

        & .email {
            font-size: 14px;
            font-weight: 500;
            opacity: 0.5;
        }
    }
}

.links {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 0px;
}

.link {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    width: 100%;
    border-radius: 4px;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 600;
    opacity: 0.5;

    &:hover {
        opacity: 1;
        background: color-mix(white, var(--dark-app), 8%);
    }

    &.red {
        color: var(--red);
        opacity: 1;

        &:hover {
            color: lighten(var(--red), 20%);
        }
    }
}
</style>