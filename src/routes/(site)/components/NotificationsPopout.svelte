<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Card from "$lib/cards/Card.svelte"
import InformationOutline from "svelte-material-icons/InformationOutline.svelte"
import Bell from "svelte-material-icons/Bell.svelte"
import { page } from "$app/stores"
import { MessageType } from "$lib/types/message"

async function request_notification_permissions() {
    // get the applicationServerKey
    let graph = $page.data.graph
    let alerts = $page.data.alerts
    let { data: { application_server_key }, errors } = await graph.req<{ application_server_key: string }>`
        message {
            application_server_key
        }
    `

    if (errors.length > 0) {
        errors.map(e => alerts.create_alert(MessageType.Error, e))
        return
    }

    if (!application_server_key) {
        alerts.create_alert(MessageType.Error, "No application server key found")
        return
    }

    console.log("waiting for service worker")
    // get the service worker push manager
    const registration = await navigator.serviceWorker.ready
    const push_manager = registration.pushManager

    let existing_subscription = await push_manager.getSubscription()
    if (existing_subscription) {
        // unsubscribe
        await existing_subscription.unsubscribe()
    }

    let push_subscription = (await push_manager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: application_server_key
    })).toJSON()

    {
        console.log(push_subscription)

        let { errors } = await graph.req<{ attach_notification_endpoint: null }>`
            message {
                attach_notification_endpoint(${{
                endpoint: push_subscription.endpoint,
                p256dh: push_subscription.keys?.p256dh,
                auth: push_subscription.keys?.auth
            }})
            }
        }`

        if (errors.length > 0) {
            errors.map(e => alerts.create_alert(MessageType.Error, e))
            return
        }

        alerts.create_alert(MessageType.Success, "Successfully subscribed to notifications")
    }

    {
        let { errors } = await graph.req<{ send_test_notification: null }>`
            message {
                send_test_notification(${{
                endpoint: push_subscription.endpoint,
            }})
            }
        `
        if (errors.length > 0) {
            errors.map(e => alerts.create_alert(MessageType.Error, e))
            return
        }
    }
}
</script>
<Card
    gap="16px"
    padding="16px"
    reset_bg={true}>
    <div class="description">
        <InformationOutline/>
        No new notifications
    </div>
    <Button
        left_icon={Bell}
        on:click={ request_notification_permissions }>
        Enable notifications
    </Button>
</Card>
<style lang="stylus">
@import 'variables'

.description
    opacity 0.4
    display flex
    gap 8px
    align-items center
</style>