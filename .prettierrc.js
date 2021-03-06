/**
 * @type {import('prettier').ParserOptions}
 */
const config = {
    /*
     *     __
     *    /__  _  ._   _  ._ _. |
     *    \_| (/_ | | (/_ | (_| |
     */

    printWidth: 100,

    tabWidth: 4,

    useTabs: false,

    semi: true,

    singleQuote: true,

    quoteProps: 'as-needed',

    jsxSingleQuote: false,

    trailingComma: 'es5',

    bracketSpacing: true,

    jsxBracketSameLine: false,

    arrowParens: 'always',

    rangeStart: 0,

    rangeEnd: Infinity,

    // parser: null,

    // filepath: null,

    requirePragma: false,

    insertPragma: false,

    proseWrap: 'preserve',

    htmlWhitespaceSensitivity: 'css',

    endOfLine: 'lf',

    overrides: [
        {
            files: ['**/*.yml'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};

module.exports = config;
