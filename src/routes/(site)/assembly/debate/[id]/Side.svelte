<script lang="ts">
import Segment from "$lib/controls/Segment.svelte"
import type { Prop } from "$lib/utils/typed_props"
import Plus from "svelte-material-icons/Plus.svelte"
import Comment from "./Comment.svelte"

export let side: "support" | "against"
export let comments: Prop<Comment, "comment">[]
</script>
<div class="side">
    <div class="header">
        <div
            class="tag"
            class:against={ side === "against" }
            class:support={ side === "support" }>
            { side === "support" ? "In Support" : "In Opposition" }
        </div>
        <Segment left_icon={Plus}/>
    </div>
    <div class="comments">
        {#each comments as comment}
            <Comment {comment}/>
        {/each}
    </div>
</div>
<style>
.side {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
}

.comments {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.header {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    justify-content: space-between;
}

.tag {
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    &.support {
        background: rgba(var(--green-rgb), 0.1);
        color: var(--green);
    }

    &.against {
        background: rgba(var(--red-rgb), 0.1);
        color: var(--red);
    }

}
</style>