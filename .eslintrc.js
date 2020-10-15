/**
 * @typedef {import('@smith-web-design/eslint-config/types/eslint').Linter.Config<Rules>} Config
 * @template {import('@smith-web-design/eslint-config/types/eslint').Linter.RulesRecord} Rules
 */

/**
 * @typedef {import('@smith-web-design/eslint-config/types/eslint').ESLintRules} ESLintRules
 * @typedef {import('@smith-web-design/eslint-config/types/import').ImportRules} ImportRules
 * @typedef {import('@smith-web-design/eslint-config/types/typescript').TypescriptRules} TypescriptRules
 */

/**
 * @type {Config<ESLintRules & ImportRules & TypescriptRules>}
 */
const config = {
    root: true,
    extends: [
        '@smith-web-design/eslint-config',
        '@smith-web-design/eslint-config/import',
        '@smith-web-design/eslint-config/typescript',
    ],
    parserOptions: {
        project: './tsconfig.eslint.json',
    },
    rules: {
        //? Enter rules here...
    },
};

module.exports = config;
