import type { SvelteComponent } from "svelte"

export type Props<T> = T extends SvelteComponent<
    infer P,
    Record<string, unknown>,
    Record<string, unknown>
> ? P : never;
export type Prop<T, K extends keyof Props<T>> = Props<T>[K];

export type PickRequired<T, fields extends keyof T> = T & Required<Pick<T, fields>>;

export type PartialRecord<K extends string | number | symbol, T> = { [P in K]?: T; };