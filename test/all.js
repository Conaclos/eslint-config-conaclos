
import test from "ava"
import eslint from "eslint"
import tempWrite from "temp-write"

test("base", (t) => {
    const conf = require("../base")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, '"use strict";').count, 0)
})

test("style", (t) => {
    const conf = require("../style")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, '"use strict"\n').count, 0)
})

test("esnext-base", (t) => {
    const conf = require("../esnext-base")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").count, 0)
})

test("esnext-style", (t) => {
    const conf = require("../esnext-style")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "\n").count, 0)
})

test("dist-mod", (t) => {
    const conf = require("../dist-mod")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").count, 0)
})

test("browser-only-mod", (t) => {
    const conf = require("../browser-only-mod")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").count, 0)
})

test("node-only-mod", (t) => {
    const conf = require("../node-only-mod")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").count, 0)
})

// Utils
/**
 * @param {*} o - candidate
 * @return {boolean} Is `o' an plain object?
 */
function isPlain (o) {
    return typeof o === "object" &&
        (Object.prototype.isPrototypeOf(o) ||
        Reflect.getPrototypeOf(o) === null)
}

/**
 * @param {object} aConf - plain configuration object
 * @param {string} aCode - JS (inline) code
 * @return {number} Numner of reported errors of the execution of ESLint
 *      on `aCode' with `aConf' as configuration
 */
function eslintResults (aConf, aCode) {
    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(aConf)),
    })
    const outputs = cli.executeOnText(aCode).results[0]

    return {
        count: outputs.errorCount + outputs.warningCount,
        rules: outputs.messages.map((msg) => msg.ruleId),
    }
}

