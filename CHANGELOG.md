# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.5.0...v3.0.0) (2020-02-17)


### ⚠ BREAKING CHANGES

* **base:** If you assign a global, your code no longer passes.

### Features

* **base:** disable assignement of imported vars ([ef426c4](https://github.com/Conaclos/eslint-config-conaclos/commit/ef426c42af926bbb2da90d1ed83c87d395ef9f0f))
* **base:** disable confusing negation in comparisons ([ffc6772](https://github.com/Conaclos/eslint-config-conaclos/commit/ffc6772c20d0256d3259407378a82744d4a777d6))
* **base:** disable NaN comparison in switch and indexOf ([91cc642](https://github.com/Conaclos/eslint-config-conaclos/commit/91cc64243a24e7c8804d413ae2502a987c63b665))
* **base:** disable return in setters ([06c29cd](https://github.com/Conaclos/eslint-config-conaclos/commit/06c29cd5495ff2624a596b25f9762cf473dcced4))
* **base:** disable return statments in constructors ([2302329](https://github.com/Conaclos/eslint-config-conaclos/commit/2302329692edb33ffa725c096545c3f1a055399d))
* **base:** do not repeat a condition in else-if blocks ([1b7fbcf](https://github.com/Conaclos/eslint-config-conaclos/commit/1b7fbcf53dc4d6ffa4f590ce6c17765fe30a8a06))
* **base:** enable all styles of var declarations and initilizations ([9bbafeb](https://github.com/Conaclos/eslint-config-conaclos/commit/9bbafebb16566198756f7769ed283a93acae28c9))
* **base:** enable continue jump ([dc32b5d](https://github.com/Conaclos/eslint-config-conaclos/commit/dc32b5d76faafa1439f20c256ed85aec0d59f4d6))
* **base:** enable extra semicolons ([593a29e](https://github.com/Conaclos/eslint-config-conaclos/commit/593a29ea0b177d607b11ca5641b706eaab3a585d))
* **base:** enable for-in loops without a if-guard ([48184a0](https://github.com/Conaclos/eslint-config-conaclos/commit/48184a0a173489349ff5e6a2e156353f83fc6b16))
* **base:** enable node process env and exit ([e270a6f](https://github.com/Conaclos/eslint-config-conaclos/commit/e270a6f8438cb93c37059bf918ca8cd877e9bb8f))
* **base:** enable node sync API ([6216df3](https://github.com/Conaclos/eslint-config-conaclos/commit/6216df3640142ea15db3dde88a9ec5ca8ddafec0))
* **base:** enforce consistent get/set pairs in classes ([ee14346](https://github.com/Conaclos/eslint-config-conaclos/commit/ee1434686b714bcb44e51ea73bb0d21b9cdbc90a))
* **base:** enforce return statements in getters ([a50ad28](https://github.com/Conaclos/eslint-config-conaclos/commit/a50ad2890a4e366b75d383781c7d84a286957e45))
* **base:** make readonly available globals ([4595a8f](https://github.com/Conaclos/eslint-config-conaclos/commit/4595a8fc167156e99b930b4aa287d51fd3a3e9d9))
* **ts-base:** disable checks already performed by TSC ([17e06c5](https://github.com/Conaclos/eslint-config-conaclos/commit/17e06c583f943b2d54561883186360a8780b8720))
* **ts-base:** disable consistent-return checks ([e1d1d46](https://github.com/Conaclos/eslint-config-conaclos/commit/e1d1d46e018625c67d07aabbdd91d58e96d75c02))
* **ts-base:** disable eslint:recommanded rules reported incompatible ([57edb5a](https://github.com/Conaclos/eslint-config-conaclos/commit/57edb5a087c8df1ee18f7697f63ec188be5334cf))
* **ts-base:** improve compatibility with base ([17adcf6](https://github.com/Conaclos/eslint-config-conaclos/commit/17adcf6ae3e3133ac3c04ab49ce401bb40d6d750))
* upgrade environements and thus available globals ([fdd1f50](https://github.com/Conaclos/eslint-config-conaclos/commit/fdd1f50c1f3c647296078f6700c2ae44e2e0f239))


### Bug Fixes

* **base:** enable non-strict comparison against null ([f05589f](https://github.com/Conaclos/eslint-config-conaclos/commit/f05589f618a8ea3c0cbb77a4f8418b498922dfad))

<a name="2.5.0"></a>
# [2.5.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.4.0...v2.5.0) (2019-01-22)


### Features

* **base:** enable infinite loops ([9af50f7](https://github.com/Conaclos/eslint-config-conaclos/commit/9af50f7))
* **base:** enable nested ternary ([03bd0d8](https://github.com/Conaclos/eslint-config-conaclos/commit/03bd0d8))
* **base:** enable param reassign ([4c43f5c](https://github.com/Conaclos/eslint-config-conaclos/commit/4c43f5c))
* **ts-base:** separate ts-base and ts-style ([c923281](https://github.com/Conaclos/eslint-config-conaclos/commit/c923281))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.3.1...v2.4.0) (2019-01-22)


### Features

* **base:** enable underscore dangles ([d537043](https://github.com/Conaclos/eslint-config-conaclos/commit/d537043))
* **ts-base:** enable function with return type inference ([774d0c6](https://github.com/Conaclos/eslint-config-conaclos/commit/774d0c6))



<a name="2.3.1"></a>
## [2.3.1](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.3.0...v2.3.1) (2019-01-22)


### Bug Fixes

* include ts-base in the package ([9401f10](https://github.com/Conaclos/eslint-config-conaclos/commit/9401f10))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.2.0...v2.3.0) (2019-01-22)


### Features

* **base:** avoid subtle race conditions with async codes ([cf90eaa](https://github.com/Conaclos/eslint-config-conaclos/commit/cf90eaa))
* **base:** disable multi code point char in regex ([3857c34](https://github.com/Conaclos/eslint-config-conaclos/commit/3857c34))
* **base:** enable bitwise operators ([419ef73](https://github.com/Conaclos/eslint-config-conaclos/commit/419ef73))
* **base:** forbid async executor for promises ([7dc90ef](https://github.com/Conaclos/eslint-config-conaclos/commit/7dc90ef))
* **base:** forbid useless catch clauses ([5529367](https://github.com/Conaclos/eslint-config-conaclos/commit/5529367))
* **ts-base:** add typescript support ([3312360](https://github.com/Conaclos/eslint-config-conaclos/commit/3312360))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.1.0...v2.2.0) (2017-12-16)


### Features

* **style:** update to ESLint 4.13 ([1b4a2c5](https://github.com/Conaclos/eslint-config-conaclos/commit/1b4a2c5))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v2.0.0...v2.1.0) (2017-09-12)


### Features

* **style:** style for line breacks inside function paren ([3a12489](https://github.com/Conaclos/eslint-config-conaclos/commit/3a12489))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.2.4...v2.0.0) (2017-07-22)


### Code Refactoring

* **base:** align with eslint-recommended ([ecbd2d4](https://github.com/Conaclos/eslint-config-conaclos/commit/ecbd2d4))


### Features

* **base:** check for loop variant ([e94fa72](https://github.com/Conaclos/eslint-config-conaclos/commit/e94fa72))
* **style:** enable only one space at end and start of a file ([c2a63d6](https://github.com/Conaclos/eslint-config-conaclos/commit/c2a63d6))
* **style:** ensure consistent spacing in switch cases ([0af5214](https://github.com/Conaclos/eslint-config-conaclos/commit/0af5214))
* **style:** freedom of comments ([64b60cc](https://github.com/Conaclos/eslint-config-conaclos/commit/64b60cc))
* **style:** if needed, semicolons should be first ([97ce407](https://github.com/Conaclos/eslint-config-conaclos/commit/97ce407))
* **style:** stricter JSdoc style ([f3e8c97](https://github.com/Conaclos/eslint-config-conaclos/commit/f3e8c97))


### BREAKING CHANGES

* **base:** disable useless char escape



<a name="1.2.4"></a>
## [1.2.4](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.2.3...v1.2.4) (2017-03-29)


### Features

* **base:** await function contains at least one await ([500f620](https://github.com/Conaclos/eslint-config-conaclos/commit/500f620))
* **base:** enforce the use of Error in Promise#reject ([8c6f61a](https://github.com/Conaclos/eslint-config-conaclos/commit/8c6f61a))
* **base:** prevent 'return await' statment ([0f8e94e](https://github.com/Conaclos/eslint-config-conaclos/commit/0f8e94e))
* **base:** prevent comparison with -0 ([a5472a9](https://github.com/Conaclos/eslint-config-conaclos/commit/a5472a9))
* **base:** prevent useless return ([2f6ef13](https://github.com/Conaclos/eslint-config-conaclos/commit/2f6ef13))
* **style:** enforce capitalization of the first comment letter ([e03e7be](https://github.com/Conaclos/eslint-config-conaclos/commit/e03e7be))
* **style:** enforce function name matching ([d2fdb86](https://github.com/Conaclos/eslint-config-conaclos/commit/d2fdb86))
* **style:** enforce function wrapping with call and apply ([571b99c](https://github.com/Conaclos/eslint-config-conaclos/commit/571b99c))
* **style:** prevent space between template string and its tag ([6f4c074](https://github.com/Conaclos/eslint-config-conaclos/commit/6f4c074))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.2.2...v1.2.3) (2016-10-06)



<a name="1.2.2"></a>
## [1.2.2](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.2.1...v1.2.2) (2016-10-04)


### Features

* **base:** Relax JSDoc linting ([24f54ec](https://github.com/Conaclos/eslint-config-conaclos/commit/24f54ec))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.2.0...v1.2.1) (2016-10-03)



<a name="1.2.0"></a>
# [1.2.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.1.0...v1.2.0) (2016-08-28)


### Features

* Add new provided rules and remove obsolete ones ([77a792b](https://github.com/Conaclos/eslint-config-conaclos/commit/77a792b))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/Conaclos/eslint-config-conaclos/compare/v1.0.0...v1.1.0) (2016-04-10)


### Bug Fixes

* max-len regex. Don't apply max-len rule on string and literal regex assigment ([1f54994](https://github.com/Conaclos/eslint-config-conaclos/commit/1f54994))


### Features

* Don't report max-len hint when using literal regex option or using a semi-colon with enabled stuff ([2dace18](https://github.com/Conaclos/eslint-config-conaclos/commit/2dace18))
* **style:** Weaken max-len within literal objects and function calls ([6eb4e6a](https://github.com/Conaclos/eslint-config-conaclos/commit/6eb4e6a))
