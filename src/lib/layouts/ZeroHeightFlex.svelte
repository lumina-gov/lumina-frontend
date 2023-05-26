<script lang="ts">

</script>
<div class="flex">
    <slot/>
</div>
<style lang="stylus">
@import variables

.flex
    height 0
    z-index 3
    display flex
    align-items center
    @media (max-width $tablet)
        height initial
</style>