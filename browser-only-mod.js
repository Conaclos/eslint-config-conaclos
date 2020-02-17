"use strict"

module.exports = {
    globals: {
        document: "readonly",
        navigator: "readonly",
        window: "readonly"
    }
        // All browser-specific globals should be prefixed by window.
        // Except navigator, and document
}

