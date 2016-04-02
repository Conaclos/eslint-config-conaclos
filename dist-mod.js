"use strict"

module.exports = {
    rules: {
        // Non-Standard features
        "no-console": 2,
            // console is not standard
        "no-debugger": 2,
            // debugger statement is not standard
        "no-warning-comments": [1, {
            location: "start",
            terms: [
                "todo",
                "fixme",
                "debug",
                "xxx"
            ]
        }]
            // Potential oblivion
    }
}

