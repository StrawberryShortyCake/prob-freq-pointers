/**
Given two positive integers, find out if the two numbers have the same frequency of digits.

PROBLEM: know and compare the frequency of digits in each integer

INPUT: 2 integers
OUTPUT: boolean

GOAL: create freq counters for each params to compare keys & value exactly
EDGE: not the same length

STEPS
1) need to have a freq counter for each digit in an integer
>> have an integer to object function
>> integer shall become strings
>> iterate through element in string to create an object
2) create the freq counters on the integers given
>> function for calling STEP 1, create variables
3) compare for exact match
>> function for iterating through 1 param's object
>> reach into the other param's object for key & value
>> if either key or value doesn't match, return false
>> default true

Constraints: Time complexity: O(n + m)
 */

/**
 * Given 2 arrays of integers, return true if they are the same numbers
 * at the same frequency, otherwise return false
 */

function createFreqCounter(numKeys) {
    const freqCounter = {};

    for (let key of numKeys) {
        const value = freqCounter[key] || 0;
        freqCounter[key] = value + 1;
    }

    return freqCounter;
}

function sameFrequency(num1, num2) {

    const num1Keys = num1.toString();
    const num2Keys = num2.toString();

    if (num1Keys.length !== num2Keys.length) return false;

    const num1FreqCounter = createFreqCounter(num1Keys);
    const num2FreqCounter = createFreqCounter(num2Keys);

    for (const key in num1FreqCounter) {
        if (num1FreqCounter[key] !== num2FreqCounter[key]) {
            return false;
        }
    }

    return true;
}

export { sameFrequency };
