# eslint-config-conaclos

This package provides gradual and personal ESLint sharable configurations.

[![travis][travis-image]][travis-url]
[![Dependency Status][versioneye-image]][versioneye-url]

[![Standard Version][sv-image]][sv-url]
[![NPM version][npm-image]][npm-url]

## Content

### Configurations

The package proposes 4 configurations and 3 mods, including 2 basic
configurations and 2 more personal (styling rules).

The basic one (base or esnext-base) can be combined with another sharable
configuration such as standardJS (see the usage section).

**base** is for an ES5-compliant project.

Prefer use **esnext-base** For an ES2015 (ES6) or ES2016+ project. It enforces
the use of ES2015 (ES6) features.

**style** and **esnext-style** respectively extends **base** and **esnext-base**
with more personal rules (4 spaces indentation, ...).

### Mods

By default the above configurations enable both browser and node environments.
**browser-only-mod** disable all environments except browser environment.

**node-only-mod** disable all environments except node environment.

**dist-mod** (distribution mod) is suitable for checking your distribution.
It reports the use of console and other non-standard features.

## Usage

[ESLint shareable configuration][esl-sc] may be used with the `extends` property
 of `.eslintrc` files.

Create `.eslintrc' and paste:
```json
{
    "extends": "conaclos"
}
```

By default the configuration `style` is used.
You can choose another configuration.
e.g. if you prefer `esnext-base` you just need to replace *conaclos* with
 *conaclos/esnext-base*:
```json
{
    "extends": "conaclos/esnext-base"
}
```
If you like [standardJS](http://standardjs.com/) styling convention, you can
combine it with a basic configuration file:
```json
{
    "extends": [
        "conaclos/esnext-base",
        "standard"
    ]
}
```
Don't forget to add "standard" as dev. dependency.

**Always** place a mod after the main configuration:
```json
{
    "extends": [
        "conaclos/esnext-base",
        "conaclos/dist-mod",
        "conaclos/browser-only-mod"
    ]
}
```

## Install

```bash
npm install --save-dev eslint-config-conaclos
```

This package requires ESLint and two plugins:

```bash
npm install --save-dev eslint eslint-plugin-extra-rules eslint-plugin-promise
```

## Why this is reported?

**no-console** warns the use of ```console.log``` in your source files as a
warning.
```console.log``` should only be used for debugging purpose.
Prefer use ```console.{info, warn, error}``` for logging purpose.

## License

The zlib license

[esl-sc]: http://eslint.org/docs/developer-guide/shareable-configs

[travis-image]:
https://img.shields.io/travis/Conaclos/eslint-config-conaclos/master.svg
[travis-url]: https://travis-ci.org/Conaclos/eslint-config-conaclos
[versioneye-image]:
https://www.versioneye.com/user/projects/5708d96ffcd19a005185516b/badge.svg?style=flat
[versioneye-url]:
https://www.versioneye.com/user/projects/5708d96ffcd19a005185516b
[sv-image]:
https://img.shields.io/badge/release-standard%20version-brightgreen.svg
[sv-url]:
https://github.com/conventional-changelog/standard-version
[npm-image]:
https://img.shields.io/npm/v/eslint-config-conaclos.svg
[npm-url]:
https://www.npmjs.com/package/eslint-config-conaclos

