<script lang="ts">
    import Lumina from "$lib/icons/LuminaEdge.svelte"
</script>
<a href="/" class="logo">
    <div class="symbol">
        <Lumina/>
    </div>
    <div class="brand">
        Lumina
    </div>
</a>
<style lang="stylus">
@import 'variables'

.logo
    display flex
    align-items: center
    gap 12px
    text-decoration none
    color white

.symbol
    font-size 40px
    display inline-flex
    color $brand
    @media (max-width $mobile)
        font-size 32px
.brand
    font-size 24px
    font-weight 700
    text-transform uppercase
    letter-spacing 0.1em
    @media (max-width $mobile)
        font-size 20px
</style>