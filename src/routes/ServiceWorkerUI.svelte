<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import ProgressBar from "$lib/display/ProgressBar.svelte"
import { onMount, tick } from "svelte"

enum Status {
    None,
    Starting,
    Installing,
    Installed,
}

let status = Status.None

async function detectServiceWorkerUpdate() {
    const registration = await navigator.serviceWorker.ready

    registration.addEventListener("updatefound", async () => {
        const installingWorker = registration.installing

        if (installingWorker === null) {
            status = Status.None
            return
        }
        status = Status.Starting

        let starting_promise: Promise<void> | null = new Promise(resolve => setTimeout(resolve, 300))

        installingWorker.addEventListener("statechange", async () => {
            if (installingWorker.state === "installed") {
                await starting_promise
                starting_promise = null

                await new Promise(resolve => setTimeout(resolve, 500))
                status = Status.Installed

                await new Promise(resolve => setTimeout(resolve, 1000))

                window.location.reload()
            }
        })

        await starting_promise

        status = Status.Installing
    })
}

onMount(detectServiceWorkerUpdate)
</script>
{#if status !== Status.None}
    <div class="alert">
        <div class="alert-title">Update available</div>
        <div class="alert-description">A new version of this app is available.</div>
        <ProgressBar width={status === Status.Starting ? 0 : status === Status.Installing ? 70 : 100}/>
        <div class="status">
            {#if status === Status.Starting}
                Starting...
            {:else if status === Status.Installing}
                Installing...
            {:else if status === Status.Installed}
                Reloading now
            {/if}
        </div>
    </div>
{/if}
<style lang="stylus">
@import "variables"

.alert
    position fixed
    width 100%
    max-width 500px
    margin 0 auto
    left 0
    bottom 24px
    right 0
    z-index 20
    display flex
    flex-direction column
    text-align center
    padding 16px
    background $dark_app
    border 1px solid transparify(white, 10%)
    border-radius 4px
    shadow()
    gap 16px
    .alert-title
        font-size 18px
        font-weight 700
    .status
        font-weight 700

</style>