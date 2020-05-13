"use strict"

var path = require("path")

module.exports = {
    "extends": [
        path.join(__dirname, "esnext-base.js"),
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint"
    ],
    rules: {
        "@typescript-eslint/adjacent-overload-signatures": 2,
        "@typescript-eslint/ban-types": 2,
        "@typescript-eslint/consistent-type-assertions": 2,
        "@typescript-eslint/no-empty-interface": 2,
        "@typescript-eslint/no-explicit-any": 2,
        "@typescript-eslint/no-extraneous-class": 2,
        "@typescript-eslint/no-invalid-void-type": 2,
        "@typescript-eslint/no-misused-new": 2,
        "@typescript-eslint/no-non-null-assertion": 2,
        "@typescript-eslint/no-var-requires": 2,
        "@typescript-eslint/prefer-namespace-keyword": 2,

        // Extension rules
        "no-array-constructor": 0,
        "@typescript-eslint/no-array-constructor": 2,

        "no-dupe-class-members": 0,
            // signatures overloadings are reported as duplicated class members.
        "@typescript-eslint/no-dupe-class-members": 2,

        "no-unused-vars": 0,
        "@typescript-eslint/no-unused-vars": [2, {
            vars: "all",
            args: "none"
        }],

        // Reset
        "array-callback-return": 0,
        "consistent-return": 0,
            // TSC checks are more accurate.
        "require-await": 0,
        "return-await": 0
    }
}
