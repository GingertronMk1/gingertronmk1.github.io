import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginVitest from "@vitest/eslint-plugin";
import pluginPrettier from "eslint-plugin-prettier/recommended";
import stylistic from "@stylistic/eslint-plugin";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue,ts,mts,tsx}"],
    plugins: {
      "@stylistic": stylistic,
    },
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  ...pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },

  vueTsConfigs.stylisticTypeChecked,

  pluginPrettier,

  {
    rules: {
      "@stylistic/semi": ["error", "always"],
    },
  },
);
