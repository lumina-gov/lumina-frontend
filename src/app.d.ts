import type { AlertsStore } from "$lib/stores/alerts"
import type { GraphClient } from "$lib/stores/graphql"

declare global {
    // See https://kit.svelte.dev/docs/types#app
    // for information about these interfaces
    // and what to do when importing types
    declare namespace App {
        // interface Locals {}
        interface PageData {
            alerts: AlertsStore;
            graph: GraphClient
        }
        interface Error {
            code?: string;
            cause?: Error;
            message: string;
            stack?: string;
        }
        // interface Platform {}
    }
}
