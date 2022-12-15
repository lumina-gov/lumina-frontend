import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    server: {
        hmr: {
            // clientPort: 443,
            // port: 80,
            // protocol: "wss",
        }
    },
}

export default config