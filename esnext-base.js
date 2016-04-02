"use strict"

var path = require("path")

module.exports = {
    "extends": path.join(__dirname, "base.js"),
    parser: "babel-eslint",
    plugins: ["babel"],
    sourceType: "module",
    rules: {
        "no-var": 2,
        "prefer-const": 2,
        "prefer-reflect": [2, {
            exceptions: ["delete"]
        }]
    }
}

