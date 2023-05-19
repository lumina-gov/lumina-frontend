<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import Tag from "$lib/display/Tag.svelte"
import Flex from "$lib/layouts/Flex.svelte"
import type { SvelteComponent } from "svelte"
import Calendar from "svelte-material-icons/Calendar.svelte"
import CheckCircle from "svelte-material-icons/CheckCircle.svelte"
import LinkVariant from "svelte-material-icons/LinkVariant.svelte"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"
import ShieldCheck from "svelte-material-icons/ShieldCheck.svelte"


export let auth_request: {
    app: {
        name: string,
        official: boolean,
        description: string,
        icon: typeof SvelteComponent,
        created: number
    },
    redirect_location: string,
    scopes: string[]
}

$: tag_text = auth_request.app.official ? "Official" : "3rd Party"

</script>
<div class="sections">
    <div class="section">
        <Flex
            align_items="center"
            direction="row">
            <div class="logo">
                <Icon
                    icon={auth_request.app.icon}
                    size={52}/>
            </div>
            <Flex
                align_items="flex-start"
                direction="column"
                gap={8}>
                <Tag color={auth_request.app.official ? "green" : "yellow"}>
                    { tag_text }
                </Tag>
                <div class="app-tag">
                    { auth_request.app.name }
                </div>
            </Flex>
        </Flex>
        <div>
            Wants to access your <strong>Lumina</strong> account
        </div>
    </div>
    <div class="section">
        <div>
            This will allow <strong>{ auth_request.app.name }</strong> to:
        </div>
        <div class="scopes">
            {#each auth_request.scopes as scope}
                <div class="scope">
                    <Icon
                        color="green"
                        icon={CheckCircle}
                        size={20}/>
                    <span>
                        { scope }
                    </span>
                </div>
            {/each}
        </div>
    </div>
    <div class="section">
        <div class="info">
            <Icon
                icon={LinkVariant}
                size={18}/>
            <span>
                Once you authorise, you will be redirected to
                <strong>{ auth_request.redirect_location }</strong>
            </span>
        </div>
        <div class="info">
            <Icon
                icon={Calendar}
                size={18}/>
            <span>
                App created on { new Date(auth_request.app.created).toLocaleDateString() }
            </span>
        </div>
        <div class="info">
            <Icon
                icon={auth_request.app.official ? ShieldCheck : OpenInNew}
                size={18}/>
            <span>
                This app is an
                {#if auth_request.app.official}
                    <strong>official Lumina government service</strong>
                {:else}
                    <strong>external 3rd party service</strong>
                {/if}
        </div>
    </div>
</div>
<style lang="stylus">
@import 'variables'

.logo
    background transparify(white, 6%)
    display inline-flex
    border-radius 8px
    color $green

.app-tag
    font-size 18px
    font-weight 600
    color white
    background transparify(white, 6%)
    border-radius 4px
    padding 6px 10px

.scopes
    display flex
    flex-direction column
    gap 8px
    .scope
        display flex
        align-items center
        gap 12px
        span
            color white
            font-weight 500

.section
    padding 24px 0
    border-bottom 1px solid transparify(white, 10%)
    color transparify(white, 60%)

    gap 12px
    display flex
    flex-direction column
    strong
        color white
        font-weight 600
    &:last-child
        border-bottom 0

    .info
        display flex
        padding 4px 0
        &:last-child
            margin-bottom 0

        span
            margin-left 12px

</style>