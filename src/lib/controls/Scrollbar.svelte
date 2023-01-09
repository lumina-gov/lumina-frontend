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

let VTrack: HTMLDivElement
let VThumb: HTMLDivElement
let HTrack: HTMLDivElement
let HThumb: HTMLDivElement

let moving_thumb: HTMLDivElement | null = null

let startTop = 0
let startY = 0
let startLeft = 0
let startX = 0

let timer = 0
let windowScrollEnabled = false
let interacted = false

$: teardownViewport = setupViewport(viewport)
$: teardownContents = setupContents(contents)
$: VTeardownTrack = setupTrack(VTrack)
$: VTeardownThumb = setupThumb(VThumb)
$: HTeardownTrack = setupTrack(HTrack)
$: HTeardownThumb = setupThumb(HThumb)

$: marginTop = margin.top ?? 0
$: marginBottom = margin.bottom ?? 0
$: marginRight = margin.right ?? 0
$: marginLeft = margin.left ?? 0

$: wholeHeight = viewport?.scrollHeight ?? 0
$: wholeWidth = viewport?.scrollWidth ?? 0
$: scrollTop = viewport?.scrollTop ?? 0
$: scrollLeft = viewport?.scrollLeft ?? 0
$: VTrackHeight = viewport?.clientHeight ?? 0 - (marginTop + marginBottom)
$: VThumbHeight = wholeHeight > 0 ? (VTrackHeight / wholeHeight) * VTrackHeight : 0
$: VThumbTop = wholeHeight > 0 ? (scrollTop / wholeHeight) * VTrackHeight : 0
$: HTrackWidth = viewport?.clientWidth ?? 0 - (marginLeft + marginRight)
$: HThumbWidth = wholeWidth > 0 ? (HTrackWidth / wholeWidth) * HTrackWidth : 0
$: HThumbLeft = wholeWidth > 0 ? (scrollLeft / wholeWidth) * HTrackWidth : 0

$: VScrollable = wholeHeight > VTrackHeight
$: VVisible = VScrollable && (alwaysVisible || initiallyVisible)
$: HScrollable = wholeWidth > HTrackWidth
$: HVisible = HScrollable && (alwaysVisible || initiallyVisible)

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
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _entry of entries) {
            wholeHeight = viewport?.scrollHeight ?? 0
            wholeWidth = viewport?.scrollWidth ?? 0
            VTrackHeight = viewport?.clientHeight - (marginTop + marginBottom) ?? 0
            HTrackWidth = viewport?.clientWidth - (marginLeft + marginRight) ?? 0
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

    if (track === VTrack) {
        VTeardownTrack?.()
        VTrack.addEventListener("mouseenter", onTrackEnter)
        VTrack.addEventListener("mouseleave", onTrackLeave)

        return () => {
            VTrack.removeEventListener("mouseenter", onTrackEnter)
            VTrack.removeEventListener("mouseleave", onTrackLeave)
        }

    }
    if (track === HTrack) {
        HTeardownTrack?.()
        HTrack.addEventListener("mouseenter", onTrackEnter)
        HTrack.addEventListener("mouseleave", onTrackLeave)

        return () => {
            HTrack.removeEventListener("mouseenter", onTrackEnter)
            HTrack.removeEventListener("mouseleave", onTrackLeave)
        }
    }

}

function setupThumb(thumb: HTMLDivElement) {
    if (!thumb) return

    if (thumb === VThumb) {
        VTeardownThumb?.()
        VThumb.addEventListener("mousedown", onThumbDown, { passive: true })
        VThumb.addEventListener("touchstart", onThumbDown, { passive: true })

        return () => {
            VThumb.removeEventListener("mousedown", onThumbDown)
            VThumb.removeEventListener("touchstart", onThumbDown)
        }
    }
    if (thumb === HThumb) {
        HTeardownThumb?.()
        HThumb.addEventListener("mousedown" , () => console.log("foo"))
        HThumb.addEventListener("mousedown", onThumbDown, { passive: true, capture: true })
        HThumb.addEventListener("touchstart", onThumbDown, { passive: true })

        return () => {
            HThumb.removeEventListener("mousedown", onThumbDown)
            HThumb.removeEventListener("touchstart", onThumbDown)
        }
    }
}

function setupContents(contents: Element) {
    if (!contents) return

    teardownContents?.()

    if (typeof window.ResizeObserver === "undefined") {
        throw new Error("window.ResizeObserver is missing.")
    }

    const observer = new ResizeObserver(entries => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (const _entry of entries) {
            wholeHeight = viewport?.scrollHeight ?? 0
            wholeWidth = viewport?.scrollWidth ?? 0
        }
        contents = contents
    })

    observer.observe(contents)

    return () => {
        observer.unobserve(contents)
        observer.disconnect()
    }
}

function setupTimer() {
    timer = window.setTimeout(() => {
        VVisible = (VScrollable && (alwaysVisible || (initiallyVisible && !interacted))) || false
        HVisible = (HScrollable && (alwaysVisible || (initiallyVisible && !interacted))) || false
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
    if (!VScrollable && !HScrollable) return
    clearTimer()
    setupTimer()

    if(VScrollable) {
        VVisible = alwaysVisible || (initiallyVisible && !interacted) || true
        scrollTop = viewport?.scrollTop ?? 0
    }
    if (HScrollable) {
        HVisible = alwaysVisible || (initiallyVisible && !interacted) || true
        scrollLeft = viewport?.scrollLeft ?? 0
    }

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
    startLeft = viewport.scrollLeft
    startY = "changedTouches" in event ? event.changedTouches[0].clientY : event.clientY
    startX = "changedTouches" in event ? event.changedTouches[0].clientX : event.clientX
    moving_thumb = event.currentTarget as HTMLDivElement
    document.addEventListener("mousemove", onThumbMove)
    document.addEventListener("touchmove", onThumbMove)
    document.addEventListener("mouseup", onThumbUp)
    document.addEventListener("touchend", onThumbUp)
}

function onThumbMove(event: TouchEvent | MouseEvent) {
    event.stopPropagation()
    event.preventDefault()

    if (moving_thumb === VThumb) {
        const clientY = "changedTouches" in event ? event.changedTouches[0].clientY : event.clientY
        const VRatio = wholeHeight / VTrackHeight
        viewport.scrollTop = startTop + VRatio * (clientY - startY)
    }
    if (moving_thumb === HThumb) {
        const clientX = "changedTouches" in event ? event.changedTouches[0].clientX : event.clientX
        const HRatio = wholeWidth / HTrackWidth
        viewport.scrollLeft = startLeft + HRatio * (clientX - startX)
    }
}

function onThumbUp(event: TouchEvent | MouseEvent) {
    event.stopPropagation()
    event.preventDefault()

    startTop = 0
    startY = 0
    startLeft = 0
    startX = 0
    moving_thumb = null

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
    VTeardownTrack?.()
    VTeardownThumb?.()
    HTeardownTrack?.()
    HTeardownThumb?.()
})
</script>

{#if VVisible}
    <div
        style:height="{ VTrackHeight }px"
        style:margin="{ marginTop }px { marginRight }px { marginBottom }px { marginLeft }px"
        class="v-scrollbar"
        class:fixed={ windowScrollEnabled }>
        <div
            bind:this={ VTrack }
            style:height="{ VTrackHeight }px"
            class="v-track"/>
        <div
            bind:this={ VThumb }
            style:height="{ VThumbHeight }px"
            style:top="{ VThumbTop }px"
            class="v-thumb"/>
    </div>
{/if}
{#if HVisible}
    <div
        style:width="{ HTrackWidth }px"
        style:margin="{ marginTop }px { marginRight }px { marginBottom }px { marginLeft }px"
        class="h-scrollbar"
        class:fixed={ windowScrollEnabled }>
        <div
            bind:this={ HTrack }
            style:width="calc({ HTrackWidth }px - { VVisible ? "var(--svrollbar-track-width, 8px))" : "" }"
            class="h-track"/>
        <div
            bind:this={ HThumb }
            style:width="{ HThumbWidth }px"
            style:left="{ HThumbLeft }px"
            class="h-thumb"/>
    </div>
{/if}

<style lang="stylus">

user-select-none()
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none

.v-scrollbar {
    position: absolute;
    user-select: none;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    right: 0;
    width: var(--svrollbar-track-width, 8px);
    user-select-none()
}

.h-scrollbar {
    position: absolute;
    user-select: none;
    display: flex;
    user-select: none;
    align-items: center;
    bottom: 0;
    left: 0;
    height: var(--svrollbar-track-width, 8px);
    user-select-none()
}

.v-scrollbar.fixed, .h-scrollbar.fixed {
    position: fixed;
}

.v-track {
    position: absolute;
    top: 0;
    right: 0;
    border-radius: var(--svrollbar-track-radius, initial);
    width: var(--svrollbar-track-width, 8px);
    opacity: var(--svrollbar-track-opacity, 1);
    background: var(--svrollbar-track-background, initial);
    box-shadow: var(--svrollbar-track-shadow, initial);
}

.h-track {
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: var(--svrollbar-track-radius, initial);
    height: var(--svrollbar-track-width, 8px);
    opacity: var(--svrollbar-track-opacity, 1);
    background: var(--svrollbar-track-background, initial);
    box-shadow: var(--svrollbar-track-shadow, initial);
}

.v-thumb {
    position: relative;
    margin: 0;
    min-height: 20px;
    border-radius: var(--svrollbar-thumb-radius, 0.25rem);
    width: var(--svrollbar-thumb-width, 6px);
    opacity: var(--svrollbar-thumb-opacity, 0.5);
    background: var(--svrollbar-thumb-background, gray);
    box-shadow: var(--svrollbar-thumb-shadow, initial);
    user-select-none()
}

.h-thumb {
    position: relative;
    margin: 0;
    min-width: 20px;
    border-radius: var(--svrollbar-thumb-radius, 0.25rem);
    height: var(--svrollbar-thumb-width, 6px);
    opacity: var(--svrollbar-thumb-opacity, 0.5);
    background: var(--svrollbar-thumb-background, gray);
    box-shadow: var(--svrollbar-thumb-shadow, initial);
    user-select-none()
}
</style>
