// make a function that takes an array of unique numbers
// example: challenge([5, 9, 13, 17, 2, 21], 20) returns 19
// and outputs the closest sum of 2 items without going over

const challenge = (nums, maxValue) => {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let check = null
  let maxSum = -Infinity

  while (left < right) {
    check = nums[left] + nums[right]
    if (check > maxValue) {
      right--
    } else if (check > maxSum) {
      maxSum = check
      left++
    } else {
      left++
    }
  }
  if (maxSum === -Infinity) return undefined
  return maxSum
}

module.exports = challenge
