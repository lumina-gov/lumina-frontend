<script lang="ts">

export let for_votes: number
export let against_votes: number

$: total_votes = for_votes + against_votes
$: for_percentage = for_votes / total_votes * 100
$: against_percentage = against_votes / total_votes * 100

</script>
<div class="progress-bar-wrapper">
    <div class="progress left">
        <div
            style:width="{ against_percentage >=  50 ? (against_percentage - 50) * 2 : 0 }%"
            class="bar"/>
    </div>
    <div class="progress right">
        <div
            style:width="{ for_percentage >= 50 ? (for_percentage - 50) * 2 : 0 }%"
            class="bar"/>
    </div>
</div>
<div class="text">
    <div
        class:against={ against_percentage > 50 }
        class:support={ for_percentage > 50 }>
        { for_percentage.toFixed(2) }%
    </div>
    <span>Support</span>
</div>
<style>
.progress-bar-wrapper {
    display: flex;
    height: 14px;
    width: 100%;
    gap: 4px;
}

.text {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
}

.text .support {
    color: var(--green);
}

.text .against {
    color: var(--red);
}

.progress {
    display: flex;
    flex: 1;
    height: 100%;
    background: rgba(255, 255, 255, 0.06);
    padding: 3px 0;
}

.progress .bar {
    height: 100%;
}

.progress.left {
    border-top-left-radius: 20px;
    padding-left: 3px;
    justify-content: flex-end;
    border-bottom-left-radius: 20px;
}

.progress.left .bar {
    background: var(--red);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.progress.right {
    border-top-right-radius: 20px;
    padding-right: 3px;
    border-bottom-right-radius: 20px;
}

.progress.right .bar {
    background: var(--green);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>