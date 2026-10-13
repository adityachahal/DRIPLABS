import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    // Next.js generated files
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Local project tooling / historical snapshots
    ".agents/**",
    ".claude/**",
    ".cursor/**",
    ".devin/**",
    ".driplabs-backups/**",

    // Local tooling/cache
    ".vercel/**",
    "node_modules/**",
  ]),
]);

export default eslintConfig;