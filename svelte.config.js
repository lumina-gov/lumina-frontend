import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

let __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess({
        stylus: {
            // this will allow us to @import variables inside of our svelte stylus css section
            paths: [resolve(__dirname, "./src/stylus")]
        }
    }),
    kit: {
        serviceWorker: {
            register: true
        },
        adapter: adapter(),
    }
}

export default config
