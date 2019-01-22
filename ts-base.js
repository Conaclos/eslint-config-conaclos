"use strict"

var path = require("path")

module.exports = {
    "extends": [
        path.join(__dirname, "esnext-base.js"),
        "plugin:@typescript-eslint/recommended"
    ],
    rules: {
        "no-dupe-class-members": 0,
            // signatures overloadings are reported as duplicated class members.
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/array-type": 0,
        "@typescript-eslint/no-extraneous-class": 2,
        "@typescript-eslint/no-parameter-properties": 0,
        "@typescript-eslint/member-delimiter-style": [2, {
            multiline: {
                delimiter: "none"
            }
        }],
        "@typescript-eslint/no-use-before-define": [2, {
            classes: false
        }],
        "@typescript-eslint/no-unused-vars": [2, {
            args: "none"
        }]
    }
}
