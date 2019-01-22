"use strict"

module.exports = {
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            ecmaVersion: 2018,
            jsx: true
        }
    },
    env: {
        es6: true,
        node: true
    },
    globals: {
        console: true,
        document: true,
        navigator: true,
        window: true
    },
        // All browser global should be prefixed by window.
        // Except navigator, document, and console
    rules: {
    // Possible error
        "for-direction": 2,
            // Verify for loop variant
        "no-async-promise-executor": 2,
        "no-compare-neg-zero": 2,
        "no-cond-assign": [2, "always"],
            // A statement should be either an instruction or an expression
        "no-console": [1, {
            allow: [
                "assert",
                "info",
                "warn",
                "error"
            ]
        }],
            // Only assertions and logging facilities should be in the source
        "no-constant-condition": [2, {
            checkLoops: false
        }],
        "no-control-regex": 2,
        "no-debugger": 1,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
            // Disallow use of empty character classes in RegEx
        "no-empty": 2,
            // Ensure to add a comment into an empty block
        "no-ex-assign": 2,
        "no-func-assign": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": [2, "functions"],
        "no-extra-semi": 2,
        "no-inner-declarations": [2, "functions"],
            // Prevent against confusing scope
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
            // Avoid issues with ECMAScript 5 parsers
        "no-misleading-character-class": 2,
            // Disable multiple code point characters in regex character class
        "no-sparse-arrays": 2,
            // Avoid issues with some parsers
            // e.g [0,,]
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
            // Prevent against inadvertent spaces
        "no-template-curly-in-string": 2,
        "no-unexpected-multiline": 2,
            // Prevent against the parsing of a single expression as
            // two expressions
        "no-unreachable": 2,
        "no-unsafe-negation": 2,
        "require-atomic-updates": 2,
        "use-isnan": 2,
        "valid-typeof": 2,

    // Best practice
        "accessor-pairs": 2,
            // Ensure consistent interface
            // A property setter must be coupled to a property getter
        "array-callback-return": 2,
            // Enforce return statements in callbacks of array’s methods
        "block-scoped-var": 2,
            // Analyze var scope as let scope
        "consistent-return": 2,
        curly: [2, "multi-line"],
            // Redefinable for style
        "dot-notation": 2,
            // Use dot notation instead of square-bracket notation
            // where is possible. Better error detection
        eqeqeq: [2, "always", {
            "null": "ignore"
        }],
            // Prefer strict comparison
            // Enable non-strict comparison against null
        "no-eq-null": 2,
        "guard-for-in": 2,
        "no-alert": 2,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-global-assign": 2,
        "no-implicit-coercion": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-labels": [2, {
            allowLoop: false,
            allowSwitch: false
        }],
        "no-loop-func": 2,
            // Make read-only the global variables
        "no-new-func": 2,
        "no-new-wrappers": 2,
            // Avoid issues with typeof
        "no-octal": 2,
            // Avoid historical octal. e.g. 071 is 57
        "no-script-url": 2,
        radix: 2,
            // Avoid octal issues with parseInt
        "no-sequences": 2,
            // Prevent against comma instruction sequences
        "no-caller": 2,
            // Don't use non-standard arguments.{caller, callee}
        "no-iterator": 2,
            // Don't use non-standard __iterator__
        "no-proto": 2,
            // Don't use non-standard __proto__
        "no-case-declarations": 2,
            // Disallow lexical declarations in case and default clauses.
            // The scope of a lexical declaration in these clauses is
            // the entire switch block
        "no-div-regex": 2,
        "no-warning-comments": [1, {
            location: "start",
            terms: [
                "debug"
            ]
        }],
            // Potential oblivion
        "no-with": 2,
        "no-empty-function": [2, {
            allow: [
                "arrowFunctions",
                "methods",
                "constructors"
            ]
        }],
            // Prefer comment why it is empty
        "no-empty-pattern": 2,
        "no-new": 2,
            // Disallow new For Side Effects
        "no-octal-escape": 2,
        "no-return-assign": [2, "always"],
            // Return is an instruction
        "no-return-await": 2,
        "no-unmodified-loop-condition": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
        "no-fallthrough": 2,
            // Prevent against missing break statement
        "no-lone-blocks": 2,
            // Disallow unnecessary nested blocks
        "no-self-assign": 2,
        "no-self-compare": 2,
        "no-unused-expressions": 2,
        "no-unused-labels": 2,
        "no-useless-call": 2,
        "no-useless-catch": 2,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-useless-return": 2,
        "no-implicit-globals": 2,
        "no-redeclare": [2, {
            builtinGlobals: true
        }],
        "no-throw-literal": 2,
            // Prefer exceptions as objects
        "prefer-promise-reject-errors": 2,
            // Better debugging trace
        "require-await": 2,
            // Async functions includes an await statment
        "require-unicode-regexp": 2,
        "wrap-iife": [2, "any"],
            // Redefinable for style

    // Strict
        strict: [2, "safe"],
            // Redefinable in esnext

    // Variables
        "no-label-var": 2,
        "no-restricted-globals": [2, "event"],
        "no-shadow": [2, {
            builtinGlobals: true,
            hoist: "functions"
        }],
            // Prevent against ambiguity
        "no-shadow-restricted-names": 2,
        "no-delete-var": 2,
        "no-undef": 2,
        "no-undef-init": 2,
            // Disallow use of undefined variable
        "no-unused-vars": [2, {
            vars: "all",
            args: "none"
        }],

    // Node
        "handle-callback-err": 1,
        "no-mixed-requires": [2, {
            grouping: true,
            allowCall: true
        }],
        "no-new-require": 2,
        "no-path-concat": 2,
            // Prevent against OS dependency
        "no-process-env": 2,
            // Prevent against dependencies on external environment variables
        "no-process-exit": 2,
        "no-sync": 2,

    // Stylistic Issues
        "comma-dangle": [2, "never"],
            // Avoid issues in legacy parsers
        "no-array-constructor": 2,
            // Avoid ambiguity with a single argument
        "no-continue": 2,
        "no-new-object": 2,
            // Prefer literal syntax
        "one-var": [2, {
            initialized: "never"
        }],
            // One declaration for each initialized variable
        // Harmful features
        "no-unneeded-ternary": [2, {
            defaultAssignment: false
        }],
        "unicode-bom": [2, "never"],

    // ES6
        "constructor-super": 2,
        "no-class-assign": 2,
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-new-symbol": 2,
        "no-this-before-super": 2,
        "no-useless-computed-key": 2,
        "no-useless-rename": [2, {
            ignoreDestructuring: true
        }],
        "require-yield": 2,
        "no-confusing-arrow": [2, {
            allowParens: true
        }]
            // Redefinable for style
    }
}
