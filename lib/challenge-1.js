// make a function that takes an array of unique numbers
// example: challenge([5, 9, 13, 17, 2, 21], 20) returns 19
// and outputs the closest sum of 2 items without going over

const challenge = (nums, maxValue) => {
  let maxSum = null
  for (let i = 0; i < nums.length; i++) {
    nums.filter(elem => elem !== nums[i]).forEach(elem => {
      const sum = nums[i] + elem
      if (sum > maxSum && sum <= maxValue) maxSum = sum
    })
  }
  if (!maxSum) return undefined
  return maxSum
}

module.exports = challenge
