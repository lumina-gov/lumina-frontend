<script lang="ts">
import ResponsiveLayout from "$lib/layouts/ResponsiveLayout.svelte"
import ServiceCard from "$lib/components/ServiceCard.svelte"
import { services } from "$lib/data/services"

</script>
<ResponsiveLayout min_item_size={280}>
    {#each services as service}
        <ServiceCard
            {...service}
            size="small" />
    {/each}
</ResponsiveLayout>