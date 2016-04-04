
import test from "ava"
import eslint from "eslint"
import tempWrite from "temp-write"
import util from "util"

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

test("style-max-len", (t) => {
    const conf = require("../style")
    const code = '"use strict"\nconst t = %s\nconsole.info(t)\n'
    const largeString = '"' + "t".repeat(80) + '"'

    t.is(eslintResults(conf,
                util.format(code, largeString)).count, 0)
    t.is(eslintResults(conf,
                util.format(code, "1".repeat(80))).rules[0], "max-len")
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

