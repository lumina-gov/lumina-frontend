<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { MeQuery } from "$lib/graphql/graphql-types"
import Profile from "$lib/display/Profile.svelte"
import SwapHorizontal from "svelte-material-icons/SwapHorizontal.svelte"

export let auth_page: string
export let user: NonNullable<MeQuery["me"]>

</script>
<button on:click={ () => auth_page = "select" }>
    <div class="vertical">
        <div class="horizontal">
            <div class="icon">
                <Profile/>
            </div>
            <div class="title">
                { user.first_name } { user.last_name }
            </div>
        </div>
        <div class="description">
            { user.email }
        </div>
    </div>
    <Icon
        --color="var(--brand)"
        --size="28px"
        icon={SwapHorizontal}/>
</button>
<style>
button {
    background: rgba(255, 255, 255, 0.08);
    display: flex;
    align-items: center;
    border-radius: 4px;
    outline: 0;
    padding: 24px;
    width: 100%;
    &:is(:hover, :focus) {
        background: rgba(255, 255, 255, 0.04);
    }
}

.horizontal {
    display: flex;
    align-items: center;
    gap: 12px;
}

.vertical {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
    flex: 1;
}

.title {
    font-weight: 600;
    font-size: 18px;
}

.description {
    opacity: 0.6;
}

.icon {
    color: var(--brand);
    display: inline-flex;
    font-size: 28px;
}
</style>