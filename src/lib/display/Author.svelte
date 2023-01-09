<script lang="ts">

export let author: {
    name: string
    src: string
}

</script>
<div class="author">
    <img
        class="author_img"
        alt="{author.name} profile picture"
        src={author.src}>
    <div class="author_name">
        { author.name }
    </div>
</div>
<style lang="stylus">
@import 'variables'

.author
    display flex
    flex-direction row
    gap 8px
    align-items center
    font-size 14px
    color white

.author_img
    width 24px
    height 24px
    border-radius 100px

.author_name
    font-weight 600

</style>