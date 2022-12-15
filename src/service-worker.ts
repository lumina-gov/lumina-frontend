/// <reference no-default-lib="true"/>
/// <reference lib="ES2015" />
/// <reference lib="webworker" />
declare let self: ServiceWorkerGlobalScope

import { build, files, version } from "$service-worker"

self.addEventListener("install", e => {
    console.log("[Service Worker] Install")

    e.waitUntil((async () => {
        console.log("[Service Worker] Installing")
        const cache = await caches.open(version)
        await cache.addAll(files)
        await cache.addAll(build)
        await cache.addAll(["/", "/dashboard"])
        console.log("[Service Worker] Cached all files")
    })())

    self.skipWaiting()
})

self.addEventListener("fetch", event => {
    event.respondWith(get_response(event))
})

self.addEventListener("push", event => {
    event.waitUntil((async () => {
        if (event.data) {
            const title = "Hello world"
            const options: NotificationOptions = {

                body: event.data.text(),
                icon: "/images/lumina-app-icon.png",
                image: "/images/lumina-app-icon.png",
                badge: "/images/lumina-app-icon.png",
                actions: [
                    {
                        action: "open",
                        title: "Open",
                    },
                    {
                        action: "close",
                        title: "Close",
                    }
                ]
                // data:
            }
            await self.registration.showNotification(title, options)
        }
    })())
})

self.addEventListener("activate", event => {
    event.waitUntil((async () => {
        console.log("[Service Worker] Activated")
    })())
})

async function get_response(event: FetchEvent): Promise<Response> {
    const cache = await caches.open(version)
    const cached = await cache.match(event.request)

    if (cached) {
        return cached
    }

    return fetch(event.request)
}

export {}