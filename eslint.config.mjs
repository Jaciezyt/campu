// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  {
    rules: {
      "@stylistic/semi": "off",
      "@stylistic/quotes": "off",
      "semi": ["error", "always"],
      "quotes": ["error", "double", { avoidEscape: true }],
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "@stylistic/comma-dangle": "off",
      "comma-dangle": ["error", "always-multiline"],
    },
  },
);
