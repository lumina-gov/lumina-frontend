<script lang="ts">
import Lumina from "$lib/icons/LogoEdge.svelte"
</script>
<a
    class="logo"
    href="/">
    <div class="symbol">
        <Lumina/>
    </div>
    <div class="brand">
        Lumina
    </div>
</a>
<style lang="stylus">
@import variables

.logo
    display flex
    align-items center
    gap 12px
    text-decoration none
    color white

.symbol
    font-size 30px
    display inline-flex
    color $brand
.brand
    font-size 20px
    line-height 100%
    font-weight 700
    text-transform uppercase
    letter-spacing 0.1em
    @media (max-width $mobile)
        font-size 20px
</style>