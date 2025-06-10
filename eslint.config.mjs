import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Permitir comillas no escapadas en JSX
      "react/no-unescaped-entities": "off",
      // Permitir imports no utilizados
      "@typescript-eslint/no-unused-vars": "off",
      // Permitir uso de `any`
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
