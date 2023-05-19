<PageHead title={data.post.title}/>
<SchemaComponent schema={schema}/>
<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import Newspaper from "svelte-material-icons/Newspaper.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Card from "$lib/cards/Card.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import BlocksArray from "$lib/components/blocks/BlocksArray.svelte"
import Date from "$lib/display/Date.svelte"
import PageHead from "$lib/components/PageHead.svelte"

export let data

import type { NewsArticle, WithContext } from "schema-dts"
import Author from "$lib/display/Author.svelte"
import SchemaComponent from "$lib/components/SchemaComponent.svelte"


export const schema: WithContext<NewsArticle> = {
    "@context": "https://schema.org",
    "@id": "https://lumina.earth/",
    "@type": "NewsArticle",
    "headline": data.post.title,
    "datePublished": data.post.date.toISOString(),
    "author": [
        {
            "@type": "GovernmentOrganization",
            "name": "Lumina",
            "url": "https://lumina.earth",
        }
    ],
    "publisher": {
        "@type": "GovernmentOrganization",
        "name": "Lumina",
        "url": "https://lumina.earth",
    },
    "countryOfOrigin": {
        "@type": "Country",
        "name": "Lumina",
    },
}

</script>
<Hero>
    <div class="tags">
        {#each data.post.tags as tag}
            <Tag color="brand">{ tag }</Tag>
        {/each}
    </div>
    <Heading left_icon={Newspaper}>{ data.post.title }</Heading>
    <div class="flex-wrap">
        <Date date={data.post.date}/>
        <Author
            author={{
                name: "Lumina",
                src: "/images/lumina.png",
            }}/>
    </div>
    <Card
        padding="32px"
        shadow={true}>
        <VerticalLayout max_width={600}>
            <BlocksArray blocks={data.post.blocks}/>
        </VerticalLayout>
    </Card>
</Hero>
<style lang="stylus">

.flex-wrap
    display flex
    flex-wrap wrap
    gap 8px
    align-items center
</style>