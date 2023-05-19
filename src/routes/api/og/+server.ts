import satori from "satori"
import { html } from "satori-html"
import { Resvg } from "@resvg/resvg-js"
import Card from "./Card.svelte"
import type { Props } from "$lib/utils/typed_props"

const card = Card as unknown as { render: (props: Props<Card>) => { html: string, css: string } }

export async function GET ({ fetch, request }) {

    const title = new URL(request.url).searchParams.get("title") || "No title provided"

    const result = card.render({
        title,
    })

    console.log(result)

    const svg = await satori(html(result.html + `<style>${result.css.code}</style>`), {
        fonts: [
            {
                name: "Prompt",
                data: await (await fetch("/fonts/Prompt-Bold.ttf")).arrayBuffer(),
                weight: 700,
                style: "normal",
            },
            {
                name: "Prompt",
                data: await (await fetch("/fonts/Prompt-Medium.ttf")).arrayBuffer(),
                weight: 500,
                style: "normal",
            },
            {
                name: "Prompt",
                data: await (await fetch("/fonts/Prompt-SemiBold.ttf")).arrayBuffer(),
                weight: 600,
                style: "normal",
            },
        ],
        height: 630,
        width: 1200,
    })

    const resvg = new Resvg(svg, {

    })

    const pngData = resvg.render()
    const pngBuffer = pngData.asPng()

    return new Response(pngBuffer, {
        headers: {
            "Content-Type": "image/png",
        },
    })
}