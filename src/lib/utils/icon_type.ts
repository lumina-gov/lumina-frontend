import type Icon from "svelte-material-icons/Alert.svelte"
import type { Props } from "./typed_props"
import type { SvelteComponent } from "svelte"

export type IconProps = Props<Icon>;
export type IconComponent = typeof SvelteComponent<IconProps>;