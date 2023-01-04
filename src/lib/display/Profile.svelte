<script>

export let size = "32px"

</script>

<div class="profile" style="
    --size: {size};
">

</div>
<style lang="stylus">
@import 'variables'

.profile
    width var(--size)
    height var(--size)
    display inline-flex
    background transparify(white, 20%)
    border-radius 50px
    background-image url('/images/profile.png')
    background-size cover
    background-position center
    background-repeat no-repeat
</style>