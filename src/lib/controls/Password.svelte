
<script lang="ts">
import Input from "./Input.svelte"
import EyeOutline from "svelte-material-icons/EyeOutline.svelte"
import EyeOffOutline from "svelte-material-icons/EyeOffOutline.svelte"
import Lock from "svelte-material-icons/Lock.svelte"
import { page } from "$app/stores"
import { MessageType } from "$lib/types/message"
import { gquery } from "$lib/graphql"
import { graphql } from "$lib/gql"

let visible = false
export let value: string
export let placeholder = "Enter password"
export let autocomplete = "current-password"
export let name = "Password"
export let focus_on_mount = false
export let check_strength = false

enum Rating {
    Weak,
    Medium,
    Strong,
    Impossible,
}

let seconds : number | null = null
let crack_string : string | null = null
$: rating = typeof seconds == "number" ?
    seconds < 86400 * 7 ? Rating.Weak :
        seconds < 86400 * 365 * 1 ? Rating.Medium :
            seconds < 86400 * 365 * 50 ? Rating.Strong :
            Rating.Impossible : null

$: style = rating !== null ? Rating[rating] : ""


async function check_password_strength() {
    if (!check_strength) return

    let { data, error } = await gquery(graphql(`
        query gct($password:String!) {
            crack_time(password: $password) {
                seconds
                guesses
                string
            }
        }`), { password: value })

    if (error || !data?.crackTime) {
        $page.data.alerts.create_alert(MessageType.Error, error?.message || "Cracktime not received.")
        return
    }

    seconds = data.crackTime.seconds
    crack_string = data.crackTime.string
}



</script>
<Input
    name={name}
    autocomplete={autocomplete}
    focus_on_mount={focus_on_mount}
    left_icon={Lock}
    placeholder={placeholder}
    right_icon={visible ? EyeOutline : EyeOffOutline}
    right_icon_handler={() => visible = !visible}
    type={visible ? "text" : "password"}
    on:keyup
    on:keydown
    on:input={ () => check_password_strength() }
    bind:value>
    {#if check_strength}
        <div class="strength {style}">
            {#each Array(4) as _, i}
                <div class="bar {rating !== null ? rating >= i ? "filled" : "" : ""}"/>
            {/each}
        </div>
        {#if rating !== null}
            <div class="strength-text-wrapper">
                <span class="opacity">Would take a goverment agency</span>
                <span class="strength-text {style}">{ crack_string ? crack_string : "an unknown time" }</span>
                <span class="opacity">to crack</span>
            </div>
        {/if}
    {/if}
</Input>

<style lang="stylus">
@import "variables"

.strength-text-wrapper
    color white
    .opacity
        opacity 0.5
    .strength-text
        color white
        &.Weak
            color $red
        &.Medium
            color $orange
        &.Strong
            color mix($yellow, $green)
        &.Impossible
            color darken($green, 10%)
.strength
    display flex
    width 100%
    gap 8px
    overflow hidden
    border-radius 20px

    .bar
        height 8px
        background transparify(white, 6%)
        flex 1
    &.Weak
        .filled
            background $red
    &.Medium
        .filled
            background $orange
    &.Strong
        .filled
            background mix($yellow, $green)
    &.Impossible
        .filled
            background darken($green, 10%)



</style>