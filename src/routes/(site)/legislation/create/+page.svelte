<!-- <script lang="ts">
import Script from "svelte-material-icons/ScriptText.svelte"
import Heading from "$lib/display/Heading.svelte"
import Input from "$lib/controls/Input.svelte"
import Title from "svelte-material-icons/FormatText.svelte"
import Button from "$lib/controls/Button.svelte"
import Earth from "svelte-material-icons/Earth.svelte"
import MultiSegment from "$lib/controls/MultiSegment.svelte"
import TextArea from "$lib/controls/TextArea.svelte"
import Hint from "$lib/display/Hint.svelte"
import Tag from "$lib/display/Tag.svelte"
import InputWrapper from "$lib/display/InputWrapper.svelte"
import SvelteMarkdown from "svelte-markdown"
import LinkTag from "$lib/controls/LinkTag.svelte"
import OpenInNew from "svelte-material-icons/OpenInNew.svelte"
import { marked } from "marked"
import TableOfContents from "$lib/display/TableOfContents.svelte"
import { convert_lex_to_toc_tree } from "$lib/utils/markdown"

type ActData = {
    title: string,
    content: string,
    tags: string[],
    related_organisations: string[],
}

let data: ActData = {
    title: "",
    content: "",
    tags: ["Health", "Ministry"],
    related_organisations: [],
}

$: toc = convert_lex_to_toc_tree(marked.lexer(data.content))


</script>

<div class="wrapper">
    <div class="area light">
        <Heading right_icon={Script}>Create Legislation</Heading>
        <Input
            name="Act Title"
            left_icon={Title}
            placeholder="eg: Healthcare Act"
            bind:value={ data.title }
        />
        <MultiSegment
            name="Tags"
            options={["Health", "Education", "Ministry"]}
            bind:values={ data.tags }
        />
        <TextArea
            name="Act Content"
            placeholder="Write your act content here, using markdown"
            bind:value={ data.content }
        />
        <MultiSegment
            name="Related Organisations"
            options={["Healthcare Ministry", "Education Ministry", "Infrastructure Ministry"]}
            bind:values={ data.related_organisations }
        />
        <Button right_icon={Earth}>
            Publish
        </Button>
    </div>
    <div class="area">
        <Hint>Preview</Hint>
        <div class="tags">
            {#each data.tags as tag}
                <Tag color="brand">{ tag }</Tag>
            {/each}
        </div>
        <Heading
            left_icon={Script}
            level={1}>
            {#if !data.title}
                <span class="placeholder">Act Title</span>
            {:else}
                { data.title }
            {/if}
        </Heading>
        <InputWrapper name="Related Organisations">
            {#if data.related_organisations.length == 0}
                <div class="placeholder">No related organisations</div>
            {:else}
                <div class="related-orgs">
                    {#each data.related_organisations as organisation}
                        <LinkTag
                            right_icon={OpenInNew}
                            right_icon_opacity={0.5}>
                            { organisation }
                        </LinkTag>
                    {/each}
                </div>
            {/if}
        </InputWrapper>
        <TableOfContents bind:items={ toc }/>
        <div class="content">
            {#if !data.content}
                <span class="placeholder">No Act Content</span>
            {:else}
                <SvelteMarkdown source={data.content}/>
            {/if}
        </div>
    </div>
</div>

<style lang="stylus">
@import variables

.wrapper
    display grid
    grid-template-columns 1fr 1fr
    height 100%
    @media (max-width 1100px)
        grid-template-columns 1fr

.tags, .related-orgs
    display flex
    flex-wrap wrap
    gap 8px

.placeholder
    opacity 0.3

.area
    padding 40px
    gap 32px
    display flex
    flex-direction column
    overflow-y auto
    flex 1
    &.light
        background transparify(white, 4%)

.content
    :global
        counter-reset h1counter
        h1, h2, h3, h4, h5, h6
            font-weight 600
            opacity 1
        p
            opacity 0.6
        ol
            opacity 0.6
        h1
            counter-reset h2counter
            &:before
                content "Division " counter(h1counter)
                counter-increment h1counter
                margin-right 8px
                display block
                opacity 0.5
                font-weight 600
                font-size 16px
        h2
            counter-reset h3counter
            &:before
                content "Part " counter(h2counter)
                counter-increment h2counter
                margin-right 8px
                display block
                opacity 0.5
                font-weight 600
                font-size 16px
        h3
            counter-reset h4counter
            &:before
                content "Section " counter(h3counter)
                counter-increment h3counter
                margin-right 8px
                display block
                opacity 0.5
                font-weight 600
                font-size 16px

</style> -->