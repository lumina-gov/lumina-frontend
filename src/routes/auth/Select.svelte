<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import ArrowRight from "svelte-material-icons/ArrowRight.svelte"
import type { MeQuery } from "$lib/graphql/graphql-types"
import Profile from "$lib/display/Profile.svelte"
import ExitToApp from "svelte-material-icons/ExitToApp.svelte"
import AccountPlus from "svelte-material-icons/AccountPlus.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import { createEventDispatcher } from "svelte"

let dispatch = createEventDispatcher<{ next: void }>()
export let auth_page: string
export let user: MeQuery["me"]

let buttons = [
    ...user ? [{
        title: `${user.first_name} ${user.last_name}`,
        icon: Profile,
        action: () => dispatch("next"),
        description: user.email
    }] : [],
    {
        title: user ? "Use Another Account" : "Login",
        icon: ExitToApp,
        action: () => auth_page = "login",
        description: "Sign into your existing Lumina account"
    },
    {
        title: "Create Account",
        icon: AccountPlus,
        action: () => auth_page = "create",
        description: "Create an account for yourself"
    }
]

</script>
<div class="what-is">
    <h3>What is Lumina?</h3>
    <p>
        Lumina is a planned city-state which aims to create a modern and technologically advanced society grounded in the principles of direct democracy, and freedom.
    </p>
    <p>
        Lumina offers various digital services globally to citizens and non-citizens.
    </p>
    <a href="/mission-and-vision">
        Read Our Mission & Vision
        <Icon
            icon={ArrowRight}
            size={20}/>
    </a>
</div>
<div class="buttons">
    {#each buttons as button}
        <button on:click={ button.action }>
            <div class="vertical">
                <div class="horizontal">
                    <div class="icon">
                        <svelte:component this={ button.icon }/>
                    </div>
                    <div class="title">
                        { button.title }
                    </div>
                </div>
                <div class="description">
                    { button.description }
                </div>
            </div>
            <Icon
                color="brand"
                icon={ChevronRight}
                size={28}/>
        </button>
    {/each}
</div>
<style lang="stylus">
@import variables

.buttons
    display flex
    flex-direction column
    background transparify(white, 4%)
    border-radius 4px
    width 100%
    overflow hidden

button
    display flex
    align-items center
    outline 0
    padding 24px
    border-top 1px solid transparify(white, 10%)
    &:hover, &:focus
        background transparify(white, 4%)
    &:first-child
        border-top none

.horizontal
    display flex
    align-items center
    gap 12px

.vertical
    display flex
    flex-direction column
    align-items start
    gap 8px
    flex 1

.title
    font-weight 600
    font-size 18px

.description
    opacity 0.6

.icon
    color $brand
    display inline-flex
    font-size 28px

.what-is
    display flex
    flex-direction column
    padding 36px 0
    gap 18px
    a
        font-weight 600
        align-items center
        display flex
        gap 8px
h3
    opacity 0.8
    font-size 20px

p
    opacity 0.6
    line-height 1.2em
    margin 0

</style>