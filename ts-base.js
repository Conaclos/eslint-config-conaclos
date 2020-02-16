"use strict"

var path = require("path")

module.exports = {
    "extends": path.join(__dirname, "esnext-base.js"),
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "no-dupe-class-members": 0,
            // signatures overloadings are reported as duplicated class members.

        // Obsolete TypeScript
        "@typescript-eslint/consistent-type-assertions": 2,

        // Possible error
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,
        "@typescript-eslint/no-extraneous-class": 2,
        "@typescript-eslint/no-empty-interface": 2,
        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, {
            vars: "all",
            args: "none"
        }],

        // Best practice
        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/ban-types": 2,
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-misused-new": 2,
        "@typescript-eslint/no-non-null-assertion": 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/prefer-namespace-keyword": 2
    }
}
