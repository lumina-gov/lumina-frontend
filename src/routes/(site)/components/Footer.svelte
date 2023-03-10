<script lang="ts">
import ArrowRight from "svelte-material-icons/ArrowRight.svelte"
import Button from "$lib/controls/Button.svelte"
import Youtube from "svelte-material-icons/Youtube.svelte"
import Twitter from "svelte-material-icons/Twitter.svelte"
import Discord from "svelte-material-icons/Discord.svelte"
import Facebook from "svelte-material-icons/Facebook.svelte"
import ChevronRight from "svelte-material-icons/ChevronRight.svelte"
import TikTok from "$lib/icons/TikTok.svelte"
import Logo from "$lib/icons/Logo.svelte"
import site_data from "$lib/data/site_data"

</script>

<footer>
    <div class="inner-wrapper call-to-action">
        <div class="cta-text">
            Join the early adopters building capabilities and help shape our future.
            <a
                class="cta-link"
                href="/onboarding">
                <span class="cta-anchor-text">
                    Get involved.
                </span>
                <span class="cta-anchor-icon">
                    <ArrowRight />
                </span>
            </a>
        </div>
    </div>
    <div class="divider" />
    <div class="inner-wrapper second">
        <div class="group">
            <Logo/>
            <div class="block-heading">
                The modern solution to governance
            </div>
        </div>
        <div class="group links">
            <div class="block-heading">
                Quick Links
            </div>
            <nav class="links-wrapper">
                <a
                    class="link"
                    href="/">Home</a>
                <a
                    class="link"
                    href="https://lightsquare.org">Light Square</a>
                <a
                    class="link"
                    href="/citizenship">Citizenship</a>
                <a
                    class="link"
                    href="https://www.notion.so/lumina-gov/Knowledge-Hub-048c967061914862b2eeff5ba21da29b">Knowledge Center</a>
                <a
                    class="link"
                    href={site_data.socials.discord}>Discord</a>
                <a
                    class="link"
                    href="/media-and-press">Media & Press</a>
            </nav>
        </div>
        <div class="group">
            <div class="block-heading">
                Become a citizen
            </div>
            <div>
                Become a citizen of Lumina today!
            </div>
            <Button
                href="/onboarding"
                right_icon={ChevronRight}>
                Get involved
            </Button>
        </div>
    </div>
    <div class="bottom">
        <div class="inner-wrapper">
            <div class="block-heading">
                Authorised by the Lumina Autonomous Zone
            </div>
            <nav class="social-media-icons">
                <a
                    class="social-media-icon"
                    href={site_data.socials.twitter}><Twitter/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.discord}><Discord/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.tiktok}><TikTok/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.facebook}><Facebook/></a>
                <a
                    class="social-media-icon"
                    href={site_data.socials.youtube}><Youtube/></a>
            </nav>
        </div>
    </div>
</footer>

<style lang="stylus">
@import "variables"

footer
    background transparify(white, 4%)

.inner-wrapper
    padding 60px 20px
    max-width 1200px
    width 100%
    display flex
    margin 0 auto


.call-to-action
    font-size 40px
    font-weight 600
    text-align center
    margin 0 auto
    @media(max-width $laptop)
        font-size 32px
    @media(max-width $tablet)
        font-size 28px

.cta-link
    color $brand
    display inline-flex
    align-items center
    gap 12px

.cta-anchor-text
    font-weight 900

.cta-anchor-icon
    display inline-flex

.divider
    background transparify(white, 8%)
    height 1px
    width 100%

.inner-wrapper.second
    display grid
    grid-template-columns 1fr 1.5fr 1fr
    gap 20px
    margin 0 auto
    @media (max-width $tablet)
        grid-template-columns 1fr 1fr
        grid-auto-flow dense
        gap 40px
        .links
            grid-column span 2
    @media (max-width $mobile)
        grid-template-columns 1fr
        .links
            grid-column span 1

.block-heading
    text-transform uppercase
    font-weight 600
    opacity 0.35

.links-wrapper
    display grid
    grid-template-columns repeat(auto-fit, minmax(160px, 1fr))
    grid-gap 10px 32px
    margin-top 8px

.link
    color white
    text-decoration none
    font-weight 600
    display inline-block

.bottom
    background transparify(white, 4%)
    padding 20px
    .inner-wrapper
        padding 8px 20px
        align-items center
        justify-content space-between
        @media (max-width $tablet)
            flex-direction column
            text-align center
            gap 20px


.social-media-icons
    display flex
    gap 10px

.social-media-icon
    color white
    padding 4px
    font-size 28px
    &:hover
        color $brand

.group
    display flex
    gap 16px
    flex-direction column
</style>

