<script>
import Hero from "$lib/layouts/Hero.svelte"
import Comment from "./Comment.svelte"
import Side from "./Side.svelte"
export let data

$: children = Object.values(data.comments).filter(comment => comment?.argument?.parent === data.id)
$: support = children.filter(comment => comment?.argument?.side === "support")
$: against = children.filter(comment => comment?.argument?.side === "against")
$: self = data.comments[data.id]
$: parent = self?.argument?.parent ? data.comments[self?.argument?.parent] : null
</script>
<Hero>
    {#if parent}
        <Comment comment={parent}/>
    {/if}
    <Comment comment={self}/>

    <div class="sides">
        <Side
            comments={support}
            side="support"/>
        <Side
            comments={against}
            side="against"/>
    </div>
</Hero>
<style lang="stylus">
@import variables

.sides
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 16px
    width: 100%
</style>