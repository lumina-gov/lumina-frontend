<script lang="ts">
import ShieldAccount from "svelte-material-icons/ShieldAccount.svelte"
import Email from "svelte-material-icons/Email.svelte"
import Input from "$lib/controls/Input.svelte"
import Button from "$lib/controls/Button.svelte"
import future from "$lib/utils/future"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"
import { MessageType } from "$lib/types/message"
import { set_cookie } from "$lib/utils/cookie"
import { goto, invalidateAll } from "$app/navigation"
import Password from "$lib/controls/Password.svelte"
import PhoneInput from "$lib/controls/phone/PhoneInput.svelte"
import type { Country } from "$lib/data/countries"
import { graphql } from "$lib/gql"

export let data: import("./$types").PageData
let loading = false

let user = {
    email: "",
    password: "",
    first_name: "",
    last_name: "",
}

let phone: { country: Country | null, number: string } = {
    country: null,
    number: "",
}

$: invalid = !(
    user.email &&
        user.password &&
        user.first_name &&
        user.last_name &&
        phone.country &&
        phone.number
)

async function signup () {
    {
        if (invalid || !phone.country) return

        // TODO referrals
        let referrer = localStorage.getItem("referral")

        const create_user_input = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            calling_code: phone.country.calling_code,
            country_code: phone.country.code,
            phone_number: phone.number,
            referrer,
        }

        const { error } = await data.graph.gmutation(graphql(`
            mutation create_user($ui: CreateUserInput!) {
                create_user(create_user_input: $ui)
            }
        `), {
            ui: create_user_input
        })

        if (error) {
            data.alerts.create_alert(MessageType.Error, error.message)
            return
        }

        data.alerts.create_alert(MessageType.Success, "Account Created")
    }

    {
        let { data: loginData, error} = await data.graph.gmutation(graphql(`
            mutation login($user: LoginUserInput!) {
                login(login_user: $user)
            }`), { user: { password: user.password, email: user.email } })

        if (error || !loginData) {
            data.alerts.create_alert(MessageType.Error, error?.message ?? "Login failed")
        } else {
            data.alerts.create_alert(MessageType.Success, "Login Successful")
            set_cookie("token", loginData.login)
            await invalidateAll()
            await goto("/")
        }

    }

}
</script>
<div class="page">
    {#if loading}
        <OverlayLoading/>
    {/if}
    <h1>
        <span class="icon h1-icon">
            <ShieldAccount />
        </span>
        Create Account
    </h1>
    <div class="card">
        <div class="card-inner">
            <!-- <div class="center">
                <ProfilePicker />
            </div> -->
            <Input
                name="Email"
                autocomplete="email"
                focus_on_mount={true}
                left_icon={Email}
                placeholder="eg: john@example.com"
                bind:value={ user.email }
            />
            <PhoneInput bind:value={ phone }/>
            <div class="split">
                <Input
                    name="First Name"
                    autocomplete="given-name"
                    placeholder="eg: John"
                    bind:value={ user.first_name }
                />
                <Input
                    name="Last Name"
                    autocomplete="family-name"
                    placeholder="eg: Smith"
                    bind:value={ user.last_name }
                />
            </div>
            <Password
                autocomplete="new-password"
                check_strength={true}
                on:keyup={ e => { if (e.key === "Enter" && user.password) future(signup(), status => loading = status)} }
                bind:value={ user.password }/>
            <Button
                disabled={invalid}
                right_icon={ShieldAccount}
                on:click={ () => future(signup(), status => loading = status) }>
                Create Account
            </Button>
        </div>
    </div>
</div>
<style lang="stylus">
@import 'variables'

.page
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    gap: 40px

.split
    display: grid
    grid-auto-flow: column
    grid-auto-columns: 1fr
    gap: 20px

.card
    padding: 60px 20px
    background: rgba(255,255,255,0.05)
    display: flex
    width: 100%
    max-width: 600px
    justify-content: center
    border-radius: 8px

.card-inner
    gap: 20px
    max-width: 400px
    flex-direction: column
    width: 100%
    display flex

h1
    margin: 0
    display: flex
    gap 10px
    align-items center
    font-weight 600

.icon
    display inline-flex

.h1-icon
    color $brand

</style>
