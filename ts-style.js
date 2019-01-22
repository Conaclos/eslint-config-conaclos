"use strict"

var path = require("path")

module.exports = {
    "extends": [
        path.join(__dirname, "ts-base.js"),
        path.join(__dirname, "esnext-style.js")
    ],
    rules: {
        camelcase: 0,
        "@typescript-eslint/camelcase": 2,
        "@typescript-eslint/class-name-casing": 2,
        indent: 0,
        "@typescript-eslint/indent": 2,
        "@typescript-eslint/interface-name-prefix": 2,
        "@typescript-eslint/member-delimiter-style": [2, {
            multiline: {
                delimiter: "none"
            }
        }],
        "@typescript-eslint/no-inferrable-types": 2,
        "@typescript-eslint/no-parameter-properties": 2,
        "@typescript-eslint/type-annotation-spacing": 2
    }
}
