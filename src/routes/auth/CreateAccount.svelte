<script lang="ts">
import ShieldAccount from "svelte-material-icons/ShieldAccount.svelte"
import Email from "svelte-material-icons/Email.svelte"
import Input from "$lib/controls/Input.svelte"
import Button from "$lib/controls/Button.svelte"
import future from "$lib/utils/future"
import OverlayLoading from "$lib/controls/OverlayLoading.svelte"

import { set_cookie } from "$lib/utils/cookie"
import Password from "$lib/controls/Password.svelte"
import PhoneInput from "$lib/controls/phone/PhoneInput.svelte"
import type { Country } from "$lib/data/countries"
import { CreateUserDocument, type LoginMutation } from "$lib/graphql/graphql-types"
import { page } from "$app/stores"
import { createEventDispatcher } from "svelte"
import Card from "$lib/cards/Card.svelte"
import Box from "$lib/cards/Box.svelte"
import Icon from "$lib/display/Icon.svelte"
import type { GraphQLError } from "@urql/core/dist/urql-core-chunk"

let dispatch = createEventDispatcher<{ next: void }>()

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

        let referrer = localStorage.getItem("referral")

        const { error } = await $page.data.graph.gmutation(CreateUserDocument, {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            calling_code: phone.country.calling_code,
            country_code: phone.country.code,
            phone_number: phone.number,
            referrer,
        })

        if (error) {
            $page.data.alerts.create_alert("error", error.message)
            return
        }

        $page.data.alerts.create_alert("success", "Account Created")
    }

    {
        let res = await fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({
                email: user.email,
                password: user.password
            }),
        })

        let { data, errors } = await res.json() as { data?: LoginMutation, errors?: GraphQLError[]}

        if (errors || !data) {
            if (errors) {
                for (let error of errors) {
                    $page.data.alerts.create_alert("error", error.message)
                }
            } else {
                $page.data.alerts.create_alert("error", "Login failed")
            }
        } else {
            $page.data.alerts.create_alert("success", "Login Successful")
            set_cookie("token", data.auth_token)
            dispatch("next")
        }
    }
}
</script>
{#if loading}
    <OverlayLoading fixed={true}/>
{/if}
<Card padding="24px">
    <Box
        gap="20px"
        max_width="360px">
        <h1>
            <Icon
                --color="var(--brand)"
                --size="32px"
                icon={ShieldAccount}/>
            Create Account
        </h1>
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
    </Box>
</Card>
<style>
.split {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    gap: 20px;
}

h1 {
    margin: 0;
    gap: 10px;
    text-align: center;
    display: flex;
    font-size: 28px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
}
</style>