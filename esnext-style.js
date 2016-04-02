"use strict"

var path = require("path")
var styleRules = require("./style").rules

module.exports = {
    "extends": [
        path.join(__dirname, "style.js"),
        path.join(__dirname, "esnext-base.js")
    ],
    rules: {
        "comma-dangle": [2, "always-multiline"],
            // Better diff
            // Babel remove them
        "prefer-arrow-callback": 2,

    // Disable builtin rules that are incompatible with Babel
        "generator-star-spacing": 0,
        "new-cap": 0,
        "array-bracket-spacing": 0,
        "object-curly-spacing": 0,
        "object-shorthand": 0,
        "arrow-parens": 0,

        "babel/generator-star-spacing": styleRules["generator-star-spacing"],
        "babel/new-cap": styleRules["new-cap"],
        "babel/array-bracket-spacing": styleRules["array-bracket-spacing"],
        "babel/object-curly-spacing": styleRules["object-curly-spacing"],
        "babel/object-shorthand": [2, "methods"],
        "babel/arrow-parens": styleRules["arrow-parens"],
        "babel/no-await-in-loop": 2
    }
}

