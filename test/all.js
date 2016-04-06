
import test from "ava"
import eslint from "eslint"
import tempWrite from "temp-write"
import util from "util"

const styleConf = require("../style")

test("base", (t) => {
    const conf = require("../base")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, '"use strict";').length, 0)
})

test("style", (t) => {
    const conf = styleConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, '"use strict"\n').length, 0)
})

test("style-max-len", (t) => {
    const conf = styleConf
    const code = '"use strict"\nconst t = %s\nconsole.info(t)\n'
    const largeJsNumber = "1".repeat(80)
    const largeJsString = util.format('"%s"', largeJsNumber)
    const largeJsRegex = util.format("/%s/gi", largeJsNumber)

    t.is(eslintResults(conf, util.format(code, largeJsString)).length, 0)
    t.is(eslintResults(conf, util.format(code, largeJsRegex)).length, 0)
    t.is(eslintResults(conf, util.format(code, largeJsNumber))[0], "max-len")
})

test("esnext-base", (t) => {
    const conf = require("../esnext-base")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

test("esnext-style", (t) => {
    const conf = require("../esnext-style")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "\n").length, 0)
})

test("dist-mod", (t) => {
    const conf = require("../dist-mod")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

test("browser-only-mod", (t) => {
    const conf = require("../browser-only-mod")

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

test("node-only-mod", (t) => {
    const conf = require("../node-only-mod")

    t.true(isPlain(conf))
    t.same(eslintResults(conf, "").length, 0)
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
 * @return {string[]} List of reported errors and warning of the execution of
 *      ESLint on `aCode' with `aConf' as configuration
 */
function eslintResults (aConf, aCode) {
    const cli = new eslint.CLIEngine({
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(aConf)),
    })
    const outputs = cli.executeOnText(aCode).results[0]

    return outputs.messages.map((msg) => msg.ruleId)
}

