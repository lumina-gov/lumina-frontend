import type { Directive } from "mdast-util-directive/lib"
import type { Content } from "mdast-util-from-markdown/lib"
import type { Table } from "mdast-util-gfm-table/lib"

export type Block = Content | Directive | Table
