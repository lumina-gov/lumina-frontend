<script lang="ts">
export let comment: {
    id: number,
    user: number,
    text: string,
    argument: Argument | null,
    rating: number,
    votes: number,
}

type Argument = {
    parent: number,
    side: "support" | "against"
}

</script>
<div class="comment">
    { comment.text }
</div>
<style lang="stylus">
@import variables

.comment
    padding 16px
    background rgba(255, 255, 255, 0.05)
    border-radius 4px
    width 100%

</style>