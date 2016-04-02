# eslint-config-conaclos

This package provides Conaclos's eslint sharable configuration.

## Content

It proposes 4 configuration and 3 mods (*-mod.js).

### base

**base** provides the primitive set of rules.
It is recommended for an ES5-compliant project.

It let you use ES2015 (ES6) features, but doesn't enforce it.

### style

**style** extends **base** with styling rules.
If you like my coding style convention you may use it.

### esnext-base

**esnext-base** includes all rules of **base**.
It is recommended for an ES2015 (ES6) or ES7 project.

### esnext-style

**esnext-style** extends **esnext-base** with styling rules.

### browser-only-mod

By default the above configurations enable both browser and node environment.
**browser-only-mod** disable all environments except browser environment.

### node-only-mod

**node-only-mod** disable all environments except node environment.

### dist-mod

**dist-mod** (distribution mod) is recommended for checking your distribution.
It reports the use of console and other non-standard features.

## Setup

```bash
npm install --save-dev eslint-config-conaclos eslint-plugin-extra-rules eslint-plugin-promise
```

If you choose `esnext-*` as configuration you also need Babel's ESLint
[parser][babel-parser] and the attached eslint [plugin][babel-plugin].

```bash
npm install --save-dev babel-eslint eslint-plugin-babel
```

## Usage

[ESLint shareable configuration][esl-sc] may be used with the `extends` feature
 of `.eslintrc` files.

Create `.eslintrc.json' and paste:
```json
{
    "extends": "conaclos"
}
```

or add an ESLint configuration to your `package.json`:
```json
{
    "name": "my high quality project",
    "eslintConfig": {
        "extends": "conaclos"
    }
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

Always place a mod after the main configuration:
```json
{
    "extends": [
        "conaclos/esnext-base",
        "dist-mod",
        "browser-only-mod"
    ]
}
```

## License

The zlib license

[esl-sc]: http://eslint.org/docs/developer-guide/shareable-configs
[babel-parser]: https://github.com/babel/babel-eslint
[babel-plugin]: https://github.com/babel/eslint-plugin-babel

