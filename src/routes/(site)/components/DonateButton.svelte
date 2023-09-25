<script lang="ts">
import Icon from "$lib/display/Icon.svelte"
import HandCoin from "svelte-material-icons/HandCoin.svelte"

</script>
<a href="https://opencollective.com/lumina">
    <Icon icon={HandCoin}/>
    <span>Donate</span>
</a>
<style lang="stylus">
@import variables

a
    border 2px solid transparify($brand, 30%)
    border-radius 4px
    padding 10px
    display flex
    align-items center
    gap 8px
    font-weight 500
    justify-content center
    &:hover
        background $brand
        color white
</style>