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
<style>

.comment {
    padding: 16px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 4px;
    width: 100%;
}
</style>