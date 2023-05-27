<script lang="ts">
export let count: number
</script>
<div class="alert-count">
    { count }
</div>
<style lang="stylus">
@import variables

.alert-count
    padding 2px 8px
    background transparify(white, 4%)
    border-radius 100%
    font-size 14px
    color transparify(white, 50%)
</style>