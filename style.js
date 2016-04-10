
"use strict"

var path = require("path")

module.exports = {
    "extends": path.join(__dirname, "base.js"),
    plugins: [
        "promise"
    ],
    rules: {
    // Best practice
        "dot-location": [2, "property"],
        // "no-else-return": 0,
        "no-floating-decimal": 2,
        // "no-magic-numbers": 0,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        curly: [2, "all"],
            // Redefined
        "wrap-iife": [2, "inside"],
            // Redefined
        yoda: [2, "never", {
            exceptRange: true,
            onlyEquality: false
        }],

    // Stylistic Issues
        "array-bracket-spacing": [2, "never"],
        // "block-spacing": 0,
        "brace-style": [2, "1tbs", {
            allowSingleLine: false
        }],
        "comma-spacing": [2, {
            before: false,
            after: true
        }],
        "comma-style": [2, "last"],
        "computed-property-spacing": [2, "never"],
        "eol-last": [2, "unix"],
        "func-style": [2, "declaration", {
            allowArrowFunctions: true
        }],
            // Easier debugging since the main functions have a name
        indent: [2, 4, {
            SwitchCase: 1
        }],
        "key-spacing": [2, {
            beforeColon: false,
            afterColon: true
        }],
        "keyword-spacing": [2, {
            before: true,
            after: true
        }],
        "linebreak-style": [2, "unix"],
        "max-len": [2, 80, 4, {
            ignoreUrls: true,
            ignorePattern: "(?:[\"'`]|\\/[gimuy]*)[),;\s]*$"
                // Don't apply to strings and regex.
                // Easier error or warning message search
        }],
        "max-nested-callbacks": [2, 4],
        "new-parens": 2,
        "new-cap": [2, {
            newIsCap: true,
            capIsNew: false
        }],
        "no-lonely-if": 2,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [2, {
            max: 1
        }],
        "no-negated-condition": 2,
        "no-spaced-func": 2,
        "no-trailing-spaces": 2,
        "no-whitespace-before-property": 2,
        "operator-assignment": [2, "never"],
        "object-curly-spacing": [2, "never"],
        "operator-linebreak": [2, "after", {
            overrides: {
                "?": "before",
                ":": "before"
            }
        }],
        "padded-blocks": [2, {
            classes: "always",
            switches: "never"
        }],
        "quote-props": [2, "as-needed", {
            numbers: true,
            keywords: true
        }],
        quotes: [2, "double", "avoid-escape"],
        semi: [2, "never"],
        "semi-spacing": [2, {
            before: false,
            after: true
        }],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "always"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, {
            words: true,
            nonwords: false
        }],
        "spaced-comment": [2, "always", {
            markers: [
                "!",
                "eslint",
                "eslint-disable",
                "eslint-enable",
                "eslint-env",
                "global",
                "globals",
                "*package",
                "!",
                ","
            ]
        }],

    // ES6
        "arrow-body-style": [2, "as-needed"],
        "arrow-parens": [2, "always"],
        "arrow-spacing": [2, {
            before: true,
            after: true
        }],
        "generator-star-spacing": [2, "both"],
        "template-curly-spacing": [2, "never"],
        "yield-star-spacing": [2, "both"],

    // Promise plugin
        "promise/param-names": 2
    }
}
