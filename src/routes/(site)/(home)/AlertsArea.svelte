<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import type { Props } from "$lib/utils/typed_props"
import Notification from "./Notification.svelte"
import InformationOutline from "svelte-material-icons/InformationOutline.svelte"

let alerts: Props<Notification>[] = [
    {
        title: "Lumina hits 2000 Citizens",
        tag: {
            text: "Update",
            color: "brand",
        },
        date: new Date(2022, 10, 8, 1, 0, 0)
    },
]
</script>
<div class="alerts">
    {#each alerts as alert}
        <Notification {...alert}/>
    {/each}
    <div class="no-more">
        <Icon icon={InformationOutline}/>
        No more notifications
    </div>
</div>
<style lang="stylus">
@import variables

.alerts
    display flex
    flex-direction column
    background transparify(white, 4%)
    width 100%
    border-radius 6px
    .no-more
        display flex
        padding 16px
        flex-direction row
        gap 8px
        align-items center
        justify-content center
        font-size 14px
        opacity 0.5
</style>