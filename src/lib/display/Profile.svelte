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
    background transparify(white, 20%)
    border-radius 50px

</style>