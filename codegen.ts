import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://inctagram.work/api/v1/graphql",
  documents: ["./src/queries/**/*.ts"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "src/types.ts": { plugins: ["typescript"] },
    "src/": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".generated.tsx",
        baseTypesPath: "types.ts",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
      config: {
        withHooks: true,
      },
    },
  },
  // hooks: {
  //   afterAllFileWrite: `node -p "const { execSync } = require('child_process'); const generatedFilePaths = process.argv.slice(1).map((generatedFilePath) => generatedFilePath.replaceAll(String.fromCharCode(92), '')); execSync('pnpm eslint --fix ' + generatedFilePaths.join(' '));"`,
  // },
};

export default config;
