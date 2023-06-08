
export type Message = {
    id: symbol,
    text: string;
    type: "warning" | "error" | "success" | "info"
}