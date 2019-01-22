"use strict"

var path = require("path")

module.exports = {
    "extends": [
        path.join(__dirname, "style.js"),
        path.join(__dirname, "esnext-base.js")
    ],
    rules: {
        "prefer-arrow-callback": 2
    }
}

