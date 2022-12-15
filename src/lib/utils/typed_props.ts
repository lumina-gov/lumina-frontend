import type { SvelteComponentTyped } from "svelte"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Props<T> = T extends SvelteComponentTyped<infer P, any, any> ? P : never;
export type Prop<T, K extends keyof Props<T>> = Props<T>[K];