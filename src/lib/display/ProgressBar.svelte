<script>
    export let width = 50
</script>

<div class="progress-bar">
    <div class="inner-bar" style="width: {width}%;" />
</div>

<style lang="stylus">
@import 'variables'

.progress-bar
    width: 100%
    height: 12px
    background: rgba(255,255,255,0.1)
    overflow: hidden
    border-radius: 50px


.inner-bar
    background: $brand
    height: 100%
    border-radius: 50px
    transition: width ease-in-out 0.3s
</style>
