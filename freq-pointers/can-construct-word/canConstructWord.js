/**
 * PROBLEM: does the string of letters contain all the letters in the word
 * 1) what are all the unique letter in the string of letters
 * 2) what are the counts of these unique letters
 * 3) what are all the unique letter in the word
 * 4) what are the counts of these letters
 * 5) does each key in the word counter exist in the letter counter
 * 6) does each [key] value in the word counter <= that in the letter counter
 * 7) if true for each key in word counter, returns true by default
 * 8) return false, if any key fails
 *
 * EDGE:
 * -- empty strings
 *
 * SOLUTION DESIGN
 * 1) mini function for turning a string into a freq counter
 * 2) second conductor function create freq counter variable for both strings
 * 3) take word freq counter, loop through, find the matching key in letter freq counter
 * 4) return false if mismatch
 * 5) return true by default at the end
Constraints: time complexity: O(w + k) (if w is the length of word and k is the length of letters)
>> still linear
>> not just O(n) because w and k are variable inputs and we don't know if they equal
 */



/**
 * given 2 strings, letters and word, return true
 * if there are enough letters to form the word given
 */

function canConstructWord(word, letters) {

    function createFreqCounter(letterString) {
        const freqCounter = {};
        for (let letter of letterString) {
            if (freqCounter[letter] === undefined) {
                freqCounter[letter] = 1;
            } else {
                freqCounter[letter]++;
            }
        }
        return freqCounter;
    }

    // TODO: minimize the functions
    // would be nice to extract it so it can be reused, unless what
    // we are doing is very specific to only this function

    const wordFreqCounter = createFreqCounter(word);
    const letterFreqCounter = createFreqCounter(letters);

    for (const letter in wordFreqCounter) { // TODO: condense statements
        if (!(letterFreqCounter[letter])) {
            return false;
        }

        if (!(letterFreqCounter[letter] >= wordFreqCounter[letter])) {
            return false;
        }
    }

    return true;
}

export { canConstructWord };

console.log(canConstructWord('aa', 'abc'));
// false -- can't build "aa" with only 1 "a"

canConstructWord('abc', 'dcba');
// true -- can build "abc" with letters "abcd"

canConstructWord('aabb', 'bcabad');
// true -- can build "aabbcc" with those letters