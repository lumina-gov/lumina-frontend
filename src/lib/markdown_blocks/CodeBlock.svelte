<script lang="ts">
import type { Code } from "mdast-util-from-markdown/lib"
import hljs from "highlight.js"
import ContentCopy from "svelte-material-icons/ContentCopy.svelte"
import Icon from "$lib/display/Icon.svelte"
import { page } from "$app/stores"

import ButtonSound from "$lib/sounds/ButtonSound.wav"
import Tag from "$lib/display/Tag.svelte"
export let block: Code
export let editable = false

let pre: HTMLPreElement

$: highlighted_code = hljs.highlight(block.value, {
    language: block.lang || "plaintext",
})
$: lines = highlighted_code.value.split("\n")
$: digits = lines.length.toString().length
$: numbers = lines.map((_, i) => {
    const number = (i + 1).toString()

    return [
        "0".repeat(digits - number.length),
        number,
    ]
})

function copy() {
    navigator.clipboard.writeText(block.value)
    $page.data.alerts.create_alert("info", "Copied to clipboard")
    let audio = new Audio(ButtonSound)
    audio.play()
}

</script>
<pre
    bind:this={ pre }
    class:editable>
    <div
        class="header"
        class:show-header={ block.lang }>
        {#if block.lang}
            <Tag>{ block.lang }</Tag>
        {/if}
        <div
            class="copy"
            role="button"
            tabindex="0"
            on:keypress={ e => e.key === "Enter" ? copy() : null }
            on:click={ copy }>
            <Icon icon={ContentCopy}/>
        </div>
    </div>
    <code contenteditable={true}>
        <div class="line">
            <div class="number small">{ Array(digits).fill(" ").join("") }</div>
        </div>
        {#each lines as line, i}
            <div class="line">
                <div class="number"><span class="zero">{ numbers[i][0] }</span>{ numbers[i][1] }</div>
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                <div class="code">{@html line}</div>
            </div>
        {/each}
        <div class="line">
            <div class="number small">{ Array(digits).fill(" ").join("") }</div>
        </div>
    </code>
</pre>
<style>
.copy {
    display: inline-flex;
    cursor: pointer;
    color: white;
    font-size: 20px;
    padding: 6px;
    border-radius: 4px;
    user-select: none;
    color: rgba(255, 255, 255, 0.8);
    background: color-mix(white 15%, var(--dark-app));
    margin-left: auto;
}

.copy:hover,
.copy:active {
    color: white;
    background: color-mix(white 25%, var(--dark-app));
}

.header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 4px;
    display: contents;
    align-items: center;
    justify-content: space-between;
}

.header.show-header {
    display: flex;
}

.header:not(.show-header) .copy {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
}

.number {
    white-space: pre-wrap;
    color: white;
    user-select: none;
    background: rgba(255, 255, 255, 0.06);
    padding: 0 6px;
    letter-spacing: 2px;
}

.number .zero {
    display: inline;
    opacity: 0.2;
}

.number.small {
    height: 8px;
}

pre {
    position: relative;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.06);
    font-family: "Source Code Pro", monospace;
    border-radius: 4px;
    width: 100%;
    white-space: normal;
}

pre.editable {
    border-radius: 0;
}

code {
    width: 100%;
    display: block;
}

.line {
    display: flex;
    gap: 16px;
    padding-right: 16px;
}

.code {
    white-space: pre-wrap;
}

:global(.hljs-comment),
:global(.hljs-quote) {
    color: #5c6370;
    font-style: italic;
}

:global(.hljs-doctag),
:global(.hljs-keyword),
:global(.hljs-formula) {
    color: #c678dd;
}

:global(.hljs-section),
:global(.hljs-name),
:global(.hljs-selector-tag),
:global(.hljs-deletion),
:global(.hljs-subst) {
    color: #e06c75;
}

:global(.hljs-literal) {
    color: #56b6c2;
}

:global(.hljs-string),
:global(.hljs-regexp),
:global(.hljs-addition),
:global(.hljs-attribute),
:global(.hljs-meta-string) {
    color: #98c379;
}

:global(.hljs-built_in),
:global(.hljs-class .hljs-title) {
    color: #e6c07b;
}

:global(.hljs-attr),
:global(.hljs-variable),
:global(.hljs-template-variable),
:global(.hljs-type),
:global(.hljs-selector-class),
:global(.hljs-selector-attr),
:global(.hljs-selector-pseudo),
:global(.hljs-number) {
    color: #d19a66;
}

:global(.hljs-symbol),
:global(.hljs-bullet),
:global(.hljs-link),
:global(.hljs-meta),
:global(.hljs-selector-id),
:global(.hljs-title) {
    color: #61aeee;
}

:global(.hljs-emphasis) {
    font-style: italic;
}

:global(.hljs-strong) {
    font-weight: bold;
}

:global(.hljs-link) {
    text-decoration: underline;
}
</style>