
import test from "ava"
import eslint from "eslint"
import tempWrite from "temp-write"

import baseConf from "../base"
import esnextBaseConf from "../esnext-base"
import tsBaseConf from "../ts-base"
import distModConf from "../dist-mod"
import browserModConf from "../browser-mod"
import nodeModConf from "../node-mod"

test("base", (t) => {
    const conf = baseConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, '"use strict";').length, 0)
})

test("esnext-base", (t) => {
    const conf = esnextBaseConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

test("ts-base", (t) => {
    const conf = tsBaseConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "", "@typescript-eslint/parser").length, 0)
})

test("dist-mod", (t) => {
    const conf = distModConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

test("browser-only-mod", (t) => {
    const conf = browserModConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

test("node-only-mod", (t) => {
    const conf = nodeModConf

    t.true(isPlain(conf))
    t.is(eslintResults(conf, "").length, 0)
})

// Utils
/**
 * @param {*} o - candidate
 * @return {boolean} Is `o' an plain object?
 */
function isPlain (o) {
    return typeof o === "object" &&
        (Reflect.getPrototypeOf(o) === Object.prototype ||
        Reflect.getPrototypeOf(o) === null)
}

/**
 * @param {object} aConf - plain configuration object
 * @param {string} aCode - JS (inline) code
 * @return {string[]} List of reported errors and warning of the execution of
 *      ESLint on `aCode' with `aConf' as configuration
 */
function eslintResults (aConf, aCode, parser = "espree") {
    const cli = new eslint.CLIEngine({
        parser: parser,
        useEslintrc: false,
        configFile: tempWrite.sync(JSON.stringify(aConf)),
    })
    const outputs = cli.executeOnText(aCode).results[0]

    return outputs.messages.map((msg) => msg.ruleId)
}

