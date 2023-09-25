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
<style>
.card-wrapper {
    border-radius: 8px;
    margin: 40px;
    box-shadow: 0 0 8px 0 color-mix(in srgb, black 20%, transparent);
    overflow: auto;
}

.inner {
    background: white;
    height: 630px;
    width: 1200px;
}
</style>

