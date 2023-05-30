<script lang="ts">

export let src: string | null = null
export let name: string

</script>
<div class="author">
    {#if src}
        <img
            class="author_img"
            alt="{name} profile picture"
            src={src}>
    {/if}
    <div class="author_name">
        { name }
    </div>
</div>
<style lang="stylus">
@import variables

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