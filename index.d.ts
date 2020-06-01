/**
Format a fraction as a string.
@param fraction The numerator and denominator of the fraction.
@example
```
const prettyFraction = require("pretty-fraction");

prettyFraction([1, 2]);
//=> "½"

prettyFraction([3, 4]);
//=> "¾"

prettyFraction([3, 50]);
//=> "³/₅₀"
```
*/
declare function prettyFraction(fraction: [number, number]): string

export = prettyFraction
