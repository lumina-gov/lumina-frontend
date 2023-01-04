<script lang="ts">
import ResponsiveLayout from "$lib/components/layouts/ResponsiveLayout.svelte"
import ServiceCard from "$lib/components/ServiceCard.svelte"
import { information } from "$lib/data/information"

</script>
<ResponsiveLayout min_item_size={250}>
    {#each information as service}
        <ServiceCard {...service} size="small" />
    {/each}
</ResponsiveLayout>