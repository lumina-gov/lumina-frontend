<script lang="ts">
import Discord from "svelte-material-icons/Discord.svelte"
import RightChevron from "svelte-material-icons/ChevronRight.svelte"
import Button from "$lib/buttons/Button.svelte"
</script>
<div class="banner-inner">
    <div class="left">
        <div class="icon">
            <Discord />
        </div>
        <div class="text-wrapper">
            <div class="title">
                Got questions? Join the discussion
            </div>
            <div class="subtitle">
                Join our Discord server.
            </div>
        </div>
    </div>
    <Button
        hug={true}
        left_icon={Discord}
        href="https://discord.gg/r4vNcUKktT"
        style="translucent"
        right_icon={RightChevron}>
        Join Server
    </Button>
</div>

<style lang="stylus">
@import 'variables'

.banner-inner
    max-width 1000px
    width 100%
    margin 0 auto
    display flex
    padding 40px
    justify-content space-between
    gap 20px
    cardify()
    @media(max-width $tablet)
        flex-direction column
        align-items center

.left
    display flex
    flex-direction row
    align-items center
    gap 20px

.icon
    font-size 32px

.title
    font-size 18px
    font-weight 600

.subtitle
    font-size 16px
    opacity 0.5
</style>