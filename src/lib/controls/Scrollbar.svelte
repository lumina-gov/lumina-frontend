<script lang="ts">
import { createEventDispatcher, onDestroy, onMount } from "svelte"


export let viewport: Element
export let contents: Element

/**
 * milliseconds to keep scrollbar visible.
 */
export let hideAfter = 1000

/**
 * make scrollbar always visible if the content is scrollable.
 */
export let alwaysVisible = false

/**
 * make scrollbar initially visible if the content is scrollable.
 *
 * after you interact with your scrollable contents, scrollbar fallback to the default visibility behavior.
 */
export let initiallyVisible = false

/**
 * margin (px) from viewport top, right, bottom and left.
 */
export let margin: { top?: number, right?: number, bottom?: number, left?: number } = {}


/**
 * @event show
 * @event hide
 */
const dispatch = createEventDispatcher()

let vTrack: HTMLDivElement
let vThumb: HTMLDivElement

let startTop = 0
let startY = 0
let timer = 0
let windowScrollEnabled = false
let interacted = false

$: teardownViewport = setupViewport(viewport)
$: teardownContents = setupContents(contents)
$: teardownTrack = setupTrack(vTrack)
$: teardownThumb = setupThumb(vThumb)

$: marginTop = margin.top ?? 0
$: marginBottom = margin.bottom ?? 0
$: marginRight = margin.right ?? 0
$: marginLeft = margin.left ?? 0

$: wholeHeight = viewport?.scrollHeight ?? 0
$: scrollTop = viewport?.scrollTop ?? 0
$: trackHeight = viewport?.clientHeight ?? 0 - (marginTop + marginBottom)
$: thumbHeight = wholeHeight > 0 ? (trackHeight / wholeHeight) * trackHeight : 0
$: thumbTop = wholeHeight > 0 ? (scrollTop / wholeHeight) * trackHeight : 0

$: scrollable = wholeHeight > trackHeight
$: visible = scrollable && (alwaysVisible || initiallyVisible)

function setupViewport(viewport: Element|null) {
    if (!viewport) return

    teardownViewport?.()

    if (typeof window.ResizeObserver === "undefined") {
        throw new Error("window.ResizeObserver is missing.")
    }

    windowScrollEnabled = document.scrollingElement === viewport

    // `document.scrollingElement` has the addEventListener function but scroll events wont occur.
    // so we should register the scroll listener to document.
    const element = windowScrollEnabled ? document : viewport

    element.addEventListener("scroll", onScroll, { passive: true })

    const observer = new ResizeObserver(entries => {
        for (const _entry of entries) {
            wholeHeight = viewport?.scrollHeight ?? 0
            trackHeight = viewport?.clientHeight - (marginTop + marginBottom) ?? 0
        }
    })

    observer.observe(viewport)

    return () => {
        element.removeEventListener("scroll", onScroll)
        observer.unobserve(contents)
        observer.disconnect()
    }
}

function setupTrack(track: HTMLDivElement) {
    if (!track) return

    teardownTrack?.()

    vTrack.addEventListener("mouseenter", onTrackEnter)
    vTrack.addEventListener("mouseleave", onTrackLeave)
    return () => {
        vTrack.removeEventListener("mouseenter", onTrackEnter)
        vTrack.removeEventListener("mouseleave", onTrackLeave)
    }
}

function setupThumb(thumb: HTMLDivElement) {
    if (!thumb) return

    teardownThumb?.()

    vThumb.addEventListener("mousedown", onThumbDown, { passive: true })
    vThumb.addEventListener("touchstart", onThumbDown, { passive: true })

    return () => {
        vThumb.removeEventListener("mousedown", onThumbDown)
        vThumb.removeEventListener("touchstart", onThumbDown)
    }
}

function setupContents(contents: Element) {
    if (!contents) return

    teardownContents?.()

    if (typeof window.ResizeObserver === "undefined") {
        throw new Error("window.ResizeObserver is missing.")
    }

    const observer = new ResizeObserver(entries => {
        for (const _entry of entries) {
            wholeHeight = viewport?.scrollHeight ?? 0
        }
    })

    observer.observe(contents)

    return () => {
        observer.unobserve(contents)
        observer.disconnect()
    }
}

function setupTimer() {
    timer = window.setTimeout(() => {
        visible = (scrollable && (alwaysVisible || (initiallyVisible && !interacted))) || false
        dispatch("hide")
    }, hideAfter)
}

function clearTimer() {
    if (timer) {
        window.clearTimeout(timer)
        timer = 0
    }
}

function onScroll() {
    if (!scrollable) return

    clearTimer()
    setupTimer()

    visible = alwaysVisible || (initiallyVisible && !interacted) || true
    scrollTop = viewport?.scrollTop ?? 0

    interacted = true

    dispatch("show")
}

function onTrackEnter() {
    clearTimer()
}

function onTrackLeave() {
    clearTimer()
    setupTimer()
}

function onThumbDown(event: TouchEvent | MouseEvent) {
    event.stopPropagation()
    event.preventDefault()

    startTop = viewport.scrollTop
    startY = "changedTouches" in event ? event.changedTouches[0].clientY : event.clientY

    document.addEventListener("mousemove", onThumbMove)
    document.addEventListener("touchmove", onThumbMove)
    document.addEventListener("mouseup", onThumbUp)
    document.addEventListener("touchend", onThumbUp)
}

function onThumbMove(event: TouchEvent | MouseEvent) {
    event.stopPropagation()
    event.preventDefault()

    const clientY = "changedTouches" in event ? event.changedTouches[0].clientY : event.clientY
    const ratio = wholeHeight / trackHeight

    viewport.scrollTop = startTop + ratio * (clientY - startY)
}

function onThumbUp(event: TouchEvent | MouseEvent) {
    event.stopPropagation()
    event.preventDefault()

    startTop = 0
    startY = 0

    document.removeEventListener("mousemove", onThumbMove)
    document.removeEventListener("touchmove", onThumbMove)
    document.removeEventListener("mouseup", onThumbUp)
    document.removeEventListener("touchend", onThumbUp)
}

onMount(() => {
    viewport = viewport ?? document.scrollingElement
    contents = contents ?? document.body
})

onDestroy(() => {
    teardownViewport?.()
    teardownContents?.()
    teardownTrack?.()
    teardownThumb?.()
})
</script>

{#if visible}
<div
    class="v-scrollbar"
    class:fixed={windowScrollEnabled}
    style="height: {trackHeight}px; margin: {marginTop}px {marginRight}px {marginBottom}px {marginLeft}px">
    <div
        bind:this={vTrack}
        class="v-track"
        style="height: {trackHeight}px"/>
    <div
        bind:this={vThumb}
        class="v-thumb"
        style="height: {thumbHeight}px; top: {thumbTop}px"/>
</div>
{/if}

<style>
.v-scrollbar {
    position: absolute;
    top: 0;
    right: 0;
    width: var(--svrollbar-track-width, 10px);
}

.v-scrollbar.fixed {
    position: fixed;
}

.v-track {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: var(--svrollbar-track-radius, initial);
    width: var(--svrollbar-track-width, 10px);
    opacity: var(--svrollbar-track-opacity, 1);
    background: var(--svrollbar-track-background, initial);
    box-shadow: var(--svrollbar-track-shadow, initial);
}

.v-thumb {
    position: relative;
    margin: 0 auto;
    min-height: 20px;
    border-radius: var(--svrollbar-thumb-radius, 0.25rem);
    width: var(--svrollbar-thumb-width, 6px);
    opacity: var(--svrollbar-thumb-opacity, 0.5);
    background: var(--svrollbar-thumb-background, gray);
    box-shadow: var(--svrollbar-thumb-shadow, initial);
}
</style>
