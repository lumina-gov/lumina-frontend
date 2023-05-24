import type { CodegenConfig } from "@graphql-codegen/cli"
import dotenv from "dotenv"
dotenv.config()

const config: CodegenConfig = {
  schema: process.env.PUBLIC_GRAPH_ENDPOINT,
  emitLegacyCommonJSImports: false,
  documents: [
    "src/**/*.graphql",
    "src/**/*.gql"
  ],
  generates: {
    "src/lib/graphql/graphql-types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node"
      ],
      config: {
        useTypeImports: true,
        scalars: {
          Uuid: "string"
        }
      }
    }
  }
}

export default config