# pretty-fraction [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/pretty-fraction/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/pretty-fraction)

Format a fraction as a string.

[![NPM Badge](https://nodei.co/npm/pretty-fraction.png)](https://npmjs.com/package/pretty-fraction)

## Install

```sh
npm install pretty-fraction
```

## Usage

```js
const prettyFraction = require("pretty-fraction");

prettyFraction([1, 2]);
//=> "½"

prettyFraction([3, 4]);
//=> "¾"

prettyFraction([3, 50]);
//=> "³/₅₀"
```

## API

### prettyFraction([numerator, denominator])

#### numerator

Type: `integer`

The numerator of the fraction.

#### denominator

Type: `integer`

The denominator of the fraction.
