# OID

A simple utility function which generates and attaches unique IDs to JavaScript objects.
Such IDs can be used in change detection algorithms or for dependency management
when class/object names are unreliable, such as JS apps after minification.

## Installation

npm users should run:

```
$ npm i --save @elemental-concept/oid
```

Yarn users should run:

```
$ yarn add @elemental-concept/oid
```

If your environment does not support ES6 imports natively, then you should use bundlers
like webpack or rollup to include this library in your project.

## Usage

Import `OID` function and invoke passing the object or class:

```javascript
import { OID } from '@elemental-concept/oid';

class Test {
}

console.log(OID(Test));

const instance = new Test();

console.log(OID(instance));
```

## Compatability

OID library contains three bundles (UMD ES5 for nodejs, ESM ES5 for older browsers and ESM ES6 for newer browsers)
as well as TypeScript typings. It should work in all modern browsers and in IE starting with IE9.
