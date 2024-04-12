/**
 * This should take a sorted array of numbers, nums, and a numeric targetAvg.
 * Determine if there is a pair of numbers in nums where the average of the pair
 * equals the target average. There may be more than one pair that matches
 * the average target.
 * Constraints: Time complexity: O(n)
 *
 * Input - sorted array of numbers, and a target average- number
 * Output - boolean - does one pair of numbers match target
 *
 * Implied - if we're given empty array, return false
 *
 * Solution - Pointers
 *
 * Create pointers with one at the beginning and one at the end
 * Get number at pointer indexes
 * With numbers, get average
 * If average is high, decrease right pointer by one
 * If average is low, increase left pointer by one
 * If average is exact return true
 * Do this while left pointer is less than right pointer
 * If we leave while loop, return false
 */

/**
 *
 * @param {*} nums
 * @param {*} targetAvg
 * @returns intake an array of nums and a target average value,
 * return true if the array contains a pair whose average equals to target average
 * false otherwise
 */

function averagePair(nums, targetAvg) {
  if (nums.length === 0) return false;
  let pointerLeft = 0;
  let pointerRight = nums.length - 1;

  while (pointerLeft < pointerRight) {
    // TODO: start with eliminating whether we found the average (faster)
    const averageOfPointers = (nums[pointerLeft] + nums[pointerRight]) / 2;
    if (averageOfPointers > targetAvg) {
      pointerRight--;
    } else if (averageOfPointers < targetAvg) {
      pointerLeft++;
    } else {
      return true;
    }
  }
  return false;
}


export { averagePair };
