<PageHead title={data.post.title}/>
<SchemaComponent schema={schema}/>
<script lang="ts">
import Hero from "$lib/layouts/Hero.svelte"
import Newspaper from "svelte-material-icons/Newspaper.svelte"
import Heading from "$lib/display/Heading.svelte"
import Tag from "$lib/display/Tag.svelte"
import Card from "$lib/cards/Card.svelte"
import VerticalLayout from "$lib/layouts/VerticalLayout.svelte"
import DateComponent from "$lib/display/Date.svelte"
import PageHead from "$lib/components/PageHead.svelte"

export let data

import type { NewsArticle, WithContext } from "schema-dts"
import Author from "$lib/display/Author.svelte"
import SchemaComponent from "$lib/components/SchemaComponent.svelte"
import MarkdownRenderer from "$lib/display/MarkdownRenderer.svelte"
import FlexWrap from "$lib/display/FlexWrap.svelte"

$: date = new Date(data.post.publishedDate)

$: schema = {
    "@context": "https://schema.org",
    "@id": "https://lumina.earth/",
    "@type": "NewsArticle",
    "headline": data.post.title,
    "datePublished": date.toISOString(),
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
} satisfies WithContext<NewsArticle>

</script>
<Hero>
    <FlexWrap>
        {#each data.post.newsPostTags as tag}
            <Tag>{ tag.name }</Tag>
        {/each}
    </FlexWrap>
    <Heading left_icon={Newspaper}>{ data.post.title }</Heading>
    <FlexWrap>
        <DateComponent date={date}/>
        {#each data.post.authors as author}
            <Author
                name={author.authorName}
                src={author.displayPicture?.url}/>
        {/each}
    </FlexWrap>
    <Card
        padding="32px"
        shadow={true}>
        <VerticalLayout max_width={600}>
            {#each data.post.content as block}
                <MarkdownRenderer markdown={block.markdown}/>
            {/each}
        </VerticalLayout>
    </Card>
</Hero>