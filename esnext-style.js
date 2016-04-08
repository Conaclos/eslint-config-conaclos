"use strict"

var path = require("path")

module.exports = {
    "extends": [
        path.join(__dirname, "style.js"),
        path.join(__dirname, "esnext-base.js")
    ],
    rules: {
        "comma-dangle": [2, "always-multiline"],
            // Better diff
            // Transpilers remove them
        "prefer-arrow-callback": 2
    }
}

