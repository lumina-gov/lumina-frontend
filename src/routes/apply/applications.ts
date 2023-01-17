import { multipleChoice, text } from "./questions"
import { ApplicationType } from "$lib/gql/graphql"

type Question = ReturnType<typeof multipleChoice | typeof text>;
type Application = {
  type: string;
  questions: Question[];
};

// enables us to do stuff like this:
// const foo = applications[ApplicationType.Citizenship]
export const applications: Record<Uppercase<keyof typeof ApplicationType>, () => Application> = {
  CITIZENSHIP: () => ({
    type: "citizenship",
    questions: [multipleChoice("Do you think you would be a good citizen?", ["Yes", "No"]), text("Why?")],
  }),
  ORGANIZATION: () => ({
    type: "citizenship",
    questions: [multipleChoice("Good?", ["Yes", "No"]), text("Why?")],
  }),
  PIONEER: () => ({
    type: "citizenship",
    questions: [multipleChoice("Good?", ["Yes", "No"]), text("Why?")],
  })
}

export const descriptions: Record<Uppercase<keyof typeof ApplicationType>, string> = {
  CITIZENSHIP: "Apply for Lumina citizenship!",
  ORGANIZATION: "Bring about your own organization.",
  PIONEER: "Apply to be a Lumina pioneer.",
}