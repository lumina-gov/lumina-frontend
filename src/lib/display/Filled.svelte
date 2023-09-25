<script lang="ts">
export let color: "brand" | "red" = "brand"
</script>
<span class={color}><slot/></span>
<style lang="stylus">
@import variables

span
    background $brand
    padding 0 4px
    display inline-flex
    &.red
        background $red
</style>