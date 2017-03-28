"use strict"

var path = require("path")

module.exports = {
    "extends": path.join(__dirname, "base.js"),
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        "no-var": 2,
        "prefer-const": 2,
        "prefer-numeric-literals": 2
    }
}

