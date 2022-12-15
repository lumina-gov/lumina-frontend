
export type Message = {
    id: symbol,
    text: string;
    type: MessageType;
}

export enum MessageType {
    Warning,
    Error,
    Success,
    Info,
}