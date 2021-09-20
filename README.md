# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xsavoie/lotide`

**Require it:**

`const _ = require('@xsavoie/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: verify that 2 arrays are equal
* `assertEqual`: Basic assertion function using ===
* `fassertObjectEqual`: verify that 2 objects are equal
* `countLetters`: will count occurance of each letter in given string
* `countOnly`: will count occurance of specified character in given string
* `eqArrays`: verify that two arrays are equal
* `eqObjects`: verify that two objects are equal
* `findKey`: takes in a callback function to return key of specified value
* `findKeyByValue`: takes in a value and will return key associated to that value
* `flatten`: takes in an array containing elements, including nested arrays, and returns flattened version of that array
* `head`: will return the first element of an array
* `letterPositions`: returns objects with index positions of each letter in given string
* `middle`: returns middle element of array. Will return 2 element if array.length is even
* `map`: take a callback function and will modify each element of given array according to callback function
* `tail`: returns tail of an array
* `takeUntil`: takes in an array and pushes element to a new array until specified condition is met
* `without`: takes in an array and returns new array with each element, excepts specified value

