
<script lang="ts">
import Input from "./Input.svelte"
import EyeOutline from "svelte-material-icons/EyeOutline.svelte"
import EyeOffOutline from "svelte-material-icons/EyeOffOutline.svelte"
import Lock from "svelte-material-icons/Lock.svelte"
import { page } from "$app/stores"

import { CrackTimeDocument } from "$lib/graphql/graphql-types"

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

    let { data, error } = await $page.data.graph.gquery(CrackTimeDocument, {
        password: value
    })

    if (error || !data?.crack_time) {
        $page.data.alerts.create_alert("error", error?.message || "Password strength data not received.")
        return
    }

    seconds = data.crack_time.seconds
    crack_string = data.crack_time.string
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

<style>

.strength-text-wrapper {
    color: white;
    & .opacity {
        opacity: 0.5;
    }
    & .strength-text {
        color: white;
        &.Weak {
            color: var(--red);
        }
        &.Medium {
            color: var(--orange);
        }
        &.Strong {
            color: color-mix(var(--yellow), var(--green));
        }
        &.Impossible {
            color: darken(var(--green), 10%);
        }
    }
}

.strength {
    display: flex;
    width: 100%;
    gap: 8px;
    overflow: hidden;
    border-radius: 20px;

    & .bar {
        height: 8px;
        background: color-mix(white, 6%);
        flex: 1;
    }
    &.Weak {
        & .filled {
            background: var(--red);
        }
    }
    &.Medium {
        & .filled {
            background: var(--orange);
        }
    }
    &.Strong {
        & .filled {
            background: color-mix(in srgb, var(--yellow), var(--green));
        }
    }
    &.Impossible {
        & .filled {
            background: var(--green)
        }
    }
}
</style>