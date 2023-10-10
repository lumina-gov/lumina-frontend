import { sveltekit } from "@sveltejs/kit/vite"

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit()
    ],
    define: {
        "import.meta.env.VERCEL_ANALYTICS_ID": JSON.stringify(process.env.VERCEL_ANALYTICS_ID)
    },
    server: {
        hmr: {
            // clientPort: 443,
            // port: 80,
            // protocol: "wss",
        }
    },
}

export default config