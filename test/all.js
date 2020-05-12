
import test from "ava"
import eslint from "eslint"
//import tempWrite from "temp-write"

import baseConf from "../base"
import esnextBaseConf from "../esnext-base"
import tsBaseConf from "../ts-base"
import distModConf from "../dist-mod"
import browserModConf from "../browser-mod"
import nodeModConf from "../node-mod"

test("base", async (t) => {
    const conf = baseConf

    t.true(isPlain(conf))
    t.is((await eslintResults(conf, '"use strict";')).length, 0)
})

test("esnext-base", async (t) => {
    const conf = esnextBaseConf

    t.true(isPlain(conf))
    t.is((await eslintResults(conf, "")).length, 0)
})

test("ts-base", async (t) => {
    const conf = tsBaseConf

    t.true(isPlain(conf))
    t.is((await eslintResults(conf, "")).length, 0)
})

test("dist-mod", async (t) => {
    const conf = distModConf

    t.true(isPlain(conf))
    t.is((await eslintResults(conf, "")).length, 0)
})

test("browser-only-mod", async (t) => {
    const conf = browserModConf

    t.true(isPlain(conf))
    t.is((await eslintResults(conf, "")).length, 0)
})

test("node-only-mod", async (t) => {
    const conf = nodeModConf

    t.true(isPlain(conf))
    t.is((await eslintResults(conf, "")).length, 0)
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
async function eslintResults (aConf, aCode) {
    const cli = new eslint.ESLint({
        useEslintrc: false,
        baseConfig: aConf,
    })
    const results = await cli.lintText(aCode)

    return results[0].messages.map((msg) => msg.ruleId)
}

