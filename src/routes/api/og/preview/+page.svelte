<script lang="ts">
import Card from "../Card.svelte"

export let title = "Test OG Graph"
export let description = "This is a test of the OG Graph"

</script>
<div class="card-wrapper">
    <div class="inner">
        <Card
            {description}
            {title} />
    </div>
</div>
<style lang="stylus">
@import variables

.card-wrapper
    border-radius 8px
    margin 40px
    box-shadow 0 0 8px 0 transparify(black, 20%)
    overflow auto

.inner
    background white
    height 630px
    width 1200px

</style>
