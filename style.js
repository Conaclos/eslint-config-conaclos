
"use strict"

var path = require("path")

module.exports = {
    "extends": path.join(__dirname, "base.js"),
    plugins: [
        "promise",
        "extra-rules"
    ],
    rules: {
    // Possible Error
        "valid-jsdoc": [2, {
            prefer: {
                arg: "param",
                argument: "param",
                "return": "returns",
                virtual: "abstract"
            },
            preferType: {
                Boolean: "boolean",
                Number: "number",
                String: "string"
            },
            requireReturn: false,
                // Don't require return tag for procedures
            requireReturnType: false,
            requireParamDescription: false,
            requireReturnDescription: false
        }],
    // Best practice
        "dot-location": [2, "property"],
        "no-floating-decimal": 2,
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        curly: [2, "all"],
            // Redefined
        "wrap-iife": [2, "inside", {
            functionPrototypeMethods: true
        }],
            // Redefined
        yoda: [2, "never", {
            exceptRange: true,
            onlyEquality: false
        }],

    // Stylistic Issues
        "array-bracket-spacing": [2, "never"],
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
        "func-call-spacing": 2,
        "func-name-matching": 2,
        "func-style": [2, "declaration", {
            allowArrowFunctions: true
        }],
            // Easier debugging since the main functions have a name
        "indent-legacy": [2, 4, {
            SwitchCase: 1
        }],
        "key-spacing": [2, {
            beforeColon: false,
            afterColon: true,
            mode: "strict"
        }],
        "keyword-spacing": [2, {
            before: true,
            after: true
        }],
        "linebreak-style": [2, "unix"],
        "max-len": [2, 80, 4, {
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
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
        "no-mixed-operators": [2, {
            groups: [
                ["&&", "||"]
            ]
        }],
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [2, {
            max: 1
        }],
        "no-tabs": 2,
        "no-trailing-spaces": 2,
        "no-whitespace-before-property": 2,
        "operator-assignment": [2, "never"],
        "object-curly-newline": [2, {
            ObjectExpression: {
                minProperties: 1
            },
            ObjectPattern: {
                multiline: true
            }
        }],
        "object-curly-spacing": [2, "never"],
        "object-property-newline": 2,
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
        quotes: [2, "double", {
            avoidEscape: true
        }],
        semi: [2, "never"],
        "semi-spacing": [2, {
            before: false,
            after: true
        }],
        "semi-style": [2, "first"],
        "space-before-blocks": [2, "always"],
        "space-before-function-paren": [2, "always"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-unary-ops": [2, {
            words: true,
            nonwords: false
        }],
        "switch-colon-spacing": [2, {
            after: true,
            before: false
        }],
        "template-tag-spacing": 2,

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
        "promise/param-names": 2,

    // Extra-rules plugin
        "extra-rules/potential-point-free": 2
            // Use unary adaptater for optional parameter removal
            // see https://glebbahmutov.com/blog/iterator-callbacks/
    }
}

