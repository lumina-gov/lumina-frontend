import type { CodegenConfig } from "@graphql-codegen/cli"
import dotenv from "dotenv"
dotenv.config()

const config: CodegenConfig = {
  emitLegacyCommonJSImports: false,
  generates: {
    "src/lib/hygraph/graphql-types.ts": {
      schema: process.env.PUBLIC_HYGRAPH_CONTENT_ENDPOINT,
      documents: [
        "src/lib/hygraph/*.gql",
      ],
      plugins: [
        "typescript",
        "typescript-operations",
        "typed-document-node"
      ],
      config: {
        useTypeImports: true,
        scalars: {
          DateTime: "string",
          Date: "string",
          Hex: "string",
          Json: "string",
          Long: "number",
          RGBAHue: "string",
          RGBATransparency: "string",
          RichTextAST: "any"
        },
      },
    },
    "src/lib/graphql/graphql-types.ts": {
      schema: process.env.PUBLIC_GRAPH_ENDPOINT,
      documents: [
        "src/lib/graphql/*.gql"
      ],
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