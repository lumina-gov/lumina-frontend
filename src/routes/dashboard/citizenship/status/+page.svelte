<script lang="ts">
import Button from "$lib/controls/Button.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Logo from "$lib/icons/Logo.svelte"
import Apps from "svelte-material-icons/Apps.svelte"
import Settlement from "$lib/icons/Settlement.svelte"
import StatusCard from "./StatusCard.svelte"
import ClockTimeFour from "svelte-material-icons/ClockTimeFour.svelte"

</script>

<div class="wrapper">
    <div class="area">
        <Logo/>
        <Tag>Citizenship</Tag>
        <Heading right_icon={Settlement}>Application Status</Heading>
        <StatusCard title="Status" left_icon={ClockTimeFour}>Pending</StatusCard>
        <div class="paras">
            <div>
                We'll let you know the next steps as we continue to build our systems.
            </div>
            <div>
                In the meantime, feel free to join our community Discord server if you would like to get involved and volunteer.
            </div>
        </div>
        <Button
            style="translucent"
            hug={true}
            href="/dashboard"
            right_icon={Apps}>
            Open Dashboard
        </Button>
    </div>
</div>
<style lang="stylus">
@import 'variables'

.paras
    display flex
    max-width 500px
    flex-direction column
    gap 8px
    opacity 0.5

.wrapper
    display flex
    height 100%
    @media (max-width 1000px)
        flex-direction column-reverse
        justify-content flex-end

.area
    padding 60px
    gap 20px
    display flex
    align-items flex-start
    flex-direction column
    flex 1
    &.light
        background transparify(white, 4%)
    @media (max-width 1000px)
        flex initial
        &.main
            flex 1
</style>