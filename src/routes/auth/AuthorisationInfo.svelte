<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import { IssueTokenDocument, type GetAuthAppQuery } from "$lib/graphql/graphql-types"
import LightUniversity from "$lib/icons/LightUniversity.svelte"
import Flex from "$lib/layouts/Flex.svelte"

import type { IconComponent } from "$lib/utils/icon_type"
import Calendar from "svelte-material-icons/Calendar.svelte"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import LinkVariant from "svelte-material-icons/LinkVariant.svelte"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"
import ShieldCheck from "svelte-material-icons/ShieldCheck.svelte"
import { scopes } from "./scopes"

import { page } from "$app/stores"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import { goto } from "$app/navigation"


export let app: NonNullable<GetAuthAppQuery["auth_app"]>
export let redirect: string
export let user_selected: boolean
export let app_slug: string

let loading = false

$: tag_text = app.official ? "Official" : "3rd Party"
$: icons = {
    "lumina-university": LightUniversity,
} as Record<string, IconComponent>

async function authorise() {
    loading = true
    let res = await $page.data.graph.gmutation(IssueTokenDocument, {
        scopes: $page.data.app_info.app.scopes,
    })

    if (res.error || !res.data) {
        $page.data.alerts.create_alert("error", res.error?.message ?? "Failed to issue token")
    } else {
        let token = res.data.issue_token
        await goto(redirect + "?token=" + token)
    }
    loading = false
}

</script>
{#if loading}
    <OverlayLoading/>
{/if}
<div class="sections">
    <div class="section">
        <Flex
            align_items="center"
            direction="row">
            <div class="logo">
                <Icon
                    --size="52px"
                    icon={icons[app_slug]}/>
            </div>
            <Flex
                align_items="flex-start"
                direction="column"
                gap={8}>
                <Tag --color="var({app.official ? "--green" : "--yellow"})">
                    { tag_text }
                </Tag>
                <div class="app-tag">
                    { app.name }
                </div>
            </Flex>
        </Flex>
        <div>
            Wants to access your <strong>Lumina</strong> account
        </div>
    </div>
    <div class="section">
        <div>
            This will allow <strong>{ app.name }</strong> to:
        </div>
        <div class="scopes">
            {#each app.scopes as scope}
                <div class="scope">
                    <Icon
                        --color="var(--green)"
                        --size="20px"
                        icon={CheckCircle}/>
                    <span>
                        { scopes[scope] || scope }
                    </span>
                </div>
            {/each}
        </div>
    </div>
    <div class="section">
        <div class="info">
            <Icon
                --size="18px"
                icon={LinkVariant}/>
            <span>
                Once you authorise, you will be redirected to
                <strong>{ redirect }</strong>
            </span>
        </div>
        <div class="info">
            <Icon
                --size="18px"
                icon={Calendar}/>
            <span>
                App created on { new Date(app.created).toLocaleDateString() }
            </span>
        </div>
        <div class="info">
            <Icon
                --size="18px"
                icon={app.official ? ShieldCheck : OpenInNew}/>
            <span>
                This app is an
                {#if app.official}
                    <strong>official Lumina government service</strong>
                {:else}
                    <strong>external 3rd party service</strong>
                {/if}
        </div>
    </div>
    <div class="section">
        <Button
            disabled={!user_selected}
            right_icon={ShieldCheck}
            on:click={ authorise }>
            Authorise
        </Button>
    </div>
</div>
<style>

.sections {
    display: flex;
    flex-direction: column;
    max-width: 450px;
}

.logo {
    background: rgba(255, 255, 255, 0.06);
    display: inline-flex;
    border-radius: 8px;
    color: var(--green);
}

.app-tag {
    font-size: 18px;
    font-weight: 600;
    color: white;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 4px;
    padding: 6px 10px;
}

.scopes {
    display: flex;
    flex-direction: column;
    gap: 8px;

    & .scope {
        display: flex;
        align-items: center;
        gap: 12px;

        & span {
            color: white;
            font-weight: 500;
        }
    }
}
.section {
    padding: 24px 0;
    border-bottom: 1px solid color-mix(in srgb, white 10%, transparent);
    color: color-mix(in srgb, white 60%, transparent);
    gap: 12px;
    display: flex;
    flex-direction: column;

    & strong {
        color: white;
        font-weight: 600;
    }

    &:last-child {
        border-bottom: 0;
    }

    & .info {
        display: flex;
        padding: 4px 0;

        &:last-child {
            margin-bottom: 0;
        }

        & span {
            margin-left: 12px;
            line-height: 120%;
        }
    }
}
</style>