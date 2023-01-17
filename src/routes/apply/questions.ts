export function multipleChoice(question: string, options: string[]) {
  return {
    type: "multipleChoice" as const,
    question,
    options,
    answer: "",
  }
}

export function text(question: string) {
  return {
    type: "text" as const,
    question,
    answer: "",
  }
}

export type Question = ReturnType<typeof multipleChoice | typeof text>;
