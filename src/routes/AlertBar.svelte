<div class="action-container-wrapper">
    {#each $alerts as message}
        <div
            bind:this={ elements[message.id] }
            class="action-bar"
            class:error={ message.type === "error" }
            class:success={ message.type === "success" }
            class:warning={ message.type === "warning" }
            role="button"
            tabindex="0"
            on:keypress={ e => {
                if (e.key === "Enter") {
                    remove(message.id)
                }
            } }
            on:click={ () => remove(message.id) }>
            <div class="icon">
                <svelte:component
                    this={ icons[message.type] }
                    --size="22px"/>
            </div>
            <div class="text">
                { message.text }
            </div>
            <Close --size="22px"/>
        </div>
    {/each}
</div>
<script lang="ts">
import Alert from "svelte-material-icons/Alert.svelte"
import Info from "svelte-material-icons/AlertCircle.svelte"
import Close from "svelte-material-icons/Close.svelte"
import Check from "svelte-material-icons/CheckCircle.svelte"
import { onMount, tick } from "svelte"
import { browser } from "$app/environment"
import type { Message } from "$lib/types/message"
import { page } from "$app/stores"
import type { IconComponent } from "$lib/utils/icon_type"

$: alerts = $page.data.alerts.store

let elements: { [key: symbol]: HTMLDivElement } = {}

let icons = {
    "info": Info,
    "warning": Alert,
    "error": Alert,
    "success": Check
} satisfies Record<Message["type"], IconComponent>

function remove(id: symbol){
    $alerts = $alerts.filter(val => val.id !== id)
}

let interval: ReturnType<typeof setInterval> | null = null

function intervalFn () {
    $alerts.shift()
    setBottomHeights()
    $alerts = $alerts
}

$: {
    if(browser){
        if($alerts.length === 0 && interval){
            clearInterval(interval)
            interval = null
        } else if($alerts.length !== 0) {
            setBottomHeights()
            if(interval == null) interval = setInterval(intervalFn, 5000)
        }
    }
}

onMount(setBottomHeights)

async function setBottomHeights () {
    await tick()
    let elms = $alerts.map((message: Message) => elements[message.id])
    let heights = 0
    let margin = 10

    for(let i in elms) {
        let el = elms[i]
        let elHeight = el.offsetHeight
        heights += margin
        el.style.bottom = heights + "px"
        heights += elHeight
    }
}

</script>
<style>
.action-container-wrapper {
    position: fixed;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 0;
    display: flex;
    align-items: flex-end;
    z-index: 250;
    justify-content: center;

    & .action-bar {
        cursor: pointer;
        background: var(--brand);
        position: fixed;
        width: 100%;
        max-width: 500px;
        padding: 8px;
        font-weight: 500;
        box-shadow: 0 0 5px color-mix(in srgb, black, 10%);
        border-radius: 5px;
        z-index: 251;
        color: white;
        transition: 0.2s ease-in-out;
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        align-items: center;
        &.warning {
            background: var(--yellow)
        }

        &.error {
            background: var(--red);
        }

        &.success {
            background: var(--green);
        }

        & .icon {
            padding-right: 8px;
            display: inline-flex;
        }
    }
}
</style>