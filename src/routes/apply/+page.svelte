<script lang="ts">
import { ApplicationType } from "$lib/gql/graphql"	
import { descriptions } from "./applications"

const types: ApplicationType[] = Object.values(ApplicationType)
</script>

<main>
    {#each types as type}
        <a
            class="type"
            href={"/apply/" + type.toLowerCase()}>{ descriptions[type] }</a>
    {/each}
</main>

<style lang="stylus">
    main
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        height: 100%
        gap: 30px

    .type
        display: block
        font-size: 30px
        border: 1px solid grey
        padding: 20px

</style>