import { parse_variable } from "$lib/stores/graph"
import { RustEnum } from "./rust_enum"

export class Option<T> extends RustEnum {
    value: T | null

    private constructor (inital: T | null) {
        super()
        this.value = inital
    }

    is_some (): boolean {
        return this.value !== null
    }

    is_none (): boolean {
        return this.value === null
    }

    unwrap (): T {
        if (this.value === null) throw new Error("Option is None")
        return this.value
    }

    static None<T>(): Option<T> {
        return new Option<T>(null)
    }

    static Some<T> (value: T): Option<T> {
        return new Option(value)
    }

    as_input () {
        if (this.value === null) {
            return "None"
        } else {
            return `Some(${parse_variable(this.value)})`
        }
    }
}
