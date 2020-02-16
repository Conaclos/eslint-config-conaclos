# eslint-config-conaclos

This package provides gradual and personal ESLint sharable configurations.

[![travis][travis-image]][travis-url]
[![Dependency Status][versioneye-image]][versioneye-url]

[![Standard Version][sv-image]][sv-url]
[![NPM version][npm-image]][npm-url]

## Content

### Configurations

The package proposes 3 configurations and 3 mods.

**base** is for an ES5-compliant projects.

Prefer use **esnext-base** for an ES2015 (ES6) or ES2016+ projects. It enforces
the use of ES2015 (ES6) features.

Prefer use **ts-base** for TypeScript projects. It uses TypeScript specific
 linting rules.


### Mods

By default the above configurations enable both browser and node environments.
**browser-only-mod** disable all environments except browser environment.

**node-only-mod** disable all environments except node environment.

**dist-mod** (distribution mod) is suitable for checking your distribution.
It reports the use of console and other non-standard features.

## Usage

[ESLint shareable configuration][esl-sc] may be used with the `extends` property
 of `.eslintrc` files.
See [ESLint ignore][eslint-ignore] for ignoring files and directories.

Create `.eslintrc' and paste:
```json
{
    "extends": "conaclos"
}
```

By default the configuration `esnext-base` is used.
You can choose another configuration.
e.g. if you prefer `ts-base` you just need to replace *conaclos* with
 *conaclos/ts-base*:
```json
{
    "extends": "conaclos/ts-base"
}
```
If you like [standardJS](http://standardjs.com/) styling convention, you can
combine it with a basic configuration file:
```json
{
    "extends": [
        "conaclos",
        "standard"
    ]
}
```
Don't forget to add "standard" as dev. dependency.

**Always** place a mod after the main configuration:
```json
{
    "extends": [
        "conaclos",
        "conaclos/dist-mod",
        "conaclos/browser-only-mod"
    ]
}
```

### Rule overriding

You can also override a rule if you think it is too strict.
For example if you think that the use of environment variable in your source
files is not harmful, you can disable the rule:

```json
{
    "extends": "conaclos",
    "rule": {
        "no-process-env": 0
    }
}
```

Replace ```0``` with ```1``` to report a warning.

### Globals

If your project uses libraries that populate the global scope, ESLint can report
 their global variables as undefined (no-def).

ESLint enables both their declaration at a file and project level.
Their declaration at a file level enables to explicitly declare them as a
dependency. This is achievable by the use of a special comment on the first line
of a file:

```js
/*global gvar1 gvar2 */

// `gvar1' and `gvar2' are considered as defined.
```

## Install

```bash
npm install --save-dev eslint eslint-config-conaclos
```

Alternatively if you use TypeScript:

```bash
npm install --save-dev eslint eslint-config-conaclos @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

## Why this is reported?

**no-console** warns the use of ```console.log``` in your source files.
```console.log``` should only be used for debugging purpose.
Prefer use ```console.{info, warn, error}``` for logging purpose.

## License

The zlib license

[esl-sc]: http://eslint.org/docs/developer-guide/shareable-configs

[travis-image]:
https://img.shields.io/travis/Conaclos/eslint-config-conaclos/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Conaclos/eslint-config-conaclos
[versioneye-image]:
https://www.versioneye.com/user/projects/5708d96ffcd19a005185516b/badge.svg?style=flat-square
[versioneye-url]:
https://www.versioneye.com/user/projects/5708d96ffcd19a005185516b
[sv-image]:
https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square
[sv-url]:
https://github.com/conventional-changelog/standard-version
[npm-image]:
https://img.shields.io/npm/v/eslint-config-conaclos.svg?style=flat-square
[npm-url]:
https://www.npmjs.com/package/eslint-config-conaclos
[eslint-ignore]:
http://eslint.org/docs/user-guide/configuring/http://eslint.org/docs/user-guide/configuring

