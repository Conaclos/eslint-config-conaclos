"use strict"

module.exports = {
    "extends": "eslint:recommended",
    parserOptions: {
        ecmaFeatures: {
            ecmaVersion: 2018,
            jsx: true
        }
    },
    env: {
        commonjs: true,
            // support for bundlers
        es2020: true,
        "shared-node-browser": true
    },
    rules: {
    // Possible error
        "no-console": [1, {
            allow: [
                "assert",
                "info",
                "warn",
                "error"
            ]
        }],
            // Only assertions and logging facilities should be in the source
        "no-debugger": 1,
        "no-dupe-else-if": 2,
        "no-extra-semi": 0,
            // Enable extra semicolons
        "no-import-assign": 2,
        "no-setter-return": 2,
        "no-template-curly-in-string": 2,
        "no-unsafe-negation": [2, {
            enforceForOrderingRelations: true
        }],
        "require-atomic-updates": 2,
        "use-isnan": [2, {
            enforceForSwitchCase: true,
            enforceForIndexOf: true
        }],

    // Best practice
        "accessor-pairs": [2, {
            enforceForClassMembers: true
        }],
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
        "no-alert": 2,
        "no-caller": 2,
            // Don't use non-standard arguments.{caller, callee}
        "no-constructor-return": 2,
        "no-div-regex": 2,
        "no-extra-bind": 2,
        "no-extra-label": 2,
            // Prevent against missing break statement
        "no-eval": 2,
        "no-extend-native": 2,
        "no-implicit-coercion": 2,
        "no-implicit-globals": 2,
        "no-implied-eval": 2,
        "no-invalid-this": 2,
        "no-iterator": 2,
            // Don't use non-standard __iterator__
        "no-lone-blocks": 2,
            // Disallow unnecessary nested blocks
        "no-loop-func": 2,
            // Make read-only the global variables
        "no-new": 2,
            // Disallow new For Side Effects
        "no-new-func": 2,
        "no-new-wrappers": 2,
            // Avoid issues with typeof
        "no-octal-escape": 2,
        "no-proto": 2,
            // Don't use non-standard __proto__
        "no-return-assign": [2, "always"],
            // Return is an instruction
        "no-return-await": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
            // Prevent against comma instruction sequences
        "no-throw-literal": 2,
            // Prefer exceptions as objects
        "no-unmodified-loop-condition": 2,
        "no-unused-expressions": 2,
        "no-useless-call": 2,
        "no-useless-concat": 2,
        "no-useless-return": 2,
        "no-warning-comments": [1, {
            location: "start",
            terms: [
                "debug"
            ]
        }],
            // Potential oblivion
        "prefer-promise-reject-errors": 2,
            // Better debugging trace
        radix: 2,
            // Avoid octal issues with parseInt
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
            builtinGlobals: true
        }],
            // Prevent against ambiguity
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

    // Stylistic Issues
        "comma-dangle": [2, "never"],
            // Avoid issues in legacy parsers
        "no-array-constructor": 2,
            // Avoid ambiguity with a single argument
        "no-new-object": 2,
            // Prefer literal syntax
        // Harmful features
        "no-unneeded-ternary": [2, {
            defaultAssignment: false
        }],
        "unicode-bom": [2, "never"],

    // ES6
        "no-useless-computed-key": 2,
        "no-useless-rename": [2, {
            ignoreDestructuring: true
        }],
        "no-confusing-arrow": 2,
            // Redefinable for style
        "require-yield": 2
    }
}
