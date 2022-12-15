<script>
import Upload from "svelte-material-icons/Upload.svelte"

</script>
<div class="picker">
    <div class="img-wrapper">
        <Upload size=24/>
    </div>
    <div class="right-side">
        <div class="text">
            Display Picture
        </div>
        <div class="text opacity">
            Optional
        </div>
    </div>
</div>
<style lang="stylus">
.picker
    display inline-flex
    align-items center
    gap 12px

.img-wrapper
    width 60px
    height 60px
    background rgba(255,255,255,0.1)
    border-radius 100px
    display flex
    align-items center
    justify-content center
    cursor pointer
    &:hover
        background #7848FF88

.text
    font-size 14px
    opacity 0.6
    text-transform uppercase
    font-weight bold

.opacity
    opacity 0.3

</style>