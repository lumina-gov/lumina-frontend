import { multipleChoice, text } from "./questions"

type Question = ReturnType<typeof multipleChoice | typeof text>;
type Application = {
  type: string;
  questions: Question[];
};

export const applications = {
  citizenship: (): Application => ({
      type: "citizenship",
      questions: [multipleChoice("Good?", ["Yes", "No"]), text("Why?")],
  })
}
