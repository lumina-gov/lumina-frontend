<script lang="ts">
import SchemaComponent from "$lib/components/SchemaComponent.svelte"
import type { FAQPage, WithContext } from "schema-dts"
import showdown from "showdown"
import MarkdownRenderer from "./MarkdownRenderer.svelte"
import Icon from "./Icon.svelte"
import Faq from "./FAQ.svelte"

let converter = new showdown.Converter()

$: faq_schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({question, answer}) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": converter.makeHtml(answer)
        }
    }))
} satisfies WithContext<FAQPage>


export let faqs: {
    question: string,
    answer: string,
}[] = []

</script>
<SchemaComponent schema={faq_schema}/>
<div class="faqs">
    {#each faqs as {question, answer}}
        <Faq question={question}>
            <MarkdownRenderer markdown={answer}/>
        </Faq>
    {/each}
</div>
<style>

.faqs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

</style>