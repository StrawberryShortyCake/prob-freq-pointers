/*
This should take two arrays of possibly-different lengths.
The first array consists of keys and the second one consists of values.

This should return an object created from the keys and values.
If there are not enough values, the rest of keys should have a value of null.
If there not enough keys, just ignore the rest of values.

Implied - if there are too many values, don't include
if there are not enough values, fill with null

Define answer object
Iterate through keys using indexes
Get value at index of each array
If the value at index for value is undefined, use null
Create key in object with index value of key as key and index value of value as
value
Return object
*/



/**
 * Returns an object comprised of key value pairs given a key array and value array.
 * If not enough values, fills value with null
 *
 * @param {*} keys
 * @param {*} vals
 * @returns object with i of key as key and i of value as value
 */

function twoArrayObject(keys, vals) {
  const arraysToObj = {};

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = vals[i];

    arraysToObj[key] = (value === undefined) ? null : value;
  }

  return arraysToObj;
}

// twoArrayObject(['x', 'y', 'z'], [1, 2]);
// // {'x': 1, 'y': 2, 'z': null}

// twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]);
// // {'a': 1, 'b': 2, 'c': 3}

export { twoArrayObject };
