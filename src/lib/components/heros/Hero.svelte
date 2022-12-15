<script>
export let translucent = false
</script>
<div
    class="hero"
    class:translucent>
    <slot/>
</div>
<style lang="stylus">
@import 'variables'
.hero
    padding 20px 48px
    @media (max-width)
        padding 20px 20px
    &.translucent
        background transparify(white, 4%)
</style>