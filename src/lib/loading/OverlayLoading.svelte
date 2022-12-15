<script>
import LogoLoading from "./LogoLoading.svelte"

</script>
<div class="overlay-spinner">
    <LogoLoading/>
</div>
<style lang="stylus">
.overlay-spinner
    display flex
    background rgba(0,0,0,0.4)
    justify-content center
    align-items center
    position fixed
    top 0
    bottom 0
    right 0
    left 0
    z-index 20
</style>

