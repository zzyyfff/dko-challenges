// make a function that takes a string of numbers
// and returns the string with the sorted by the highest count first and descending order second
// challenge("342395812")
// returns   "332298541"

const challenge = nums => {
  const counters = [
    {'digit': '0', 'count': 0},
    {'digit': '1', 'count': 0},
    {'digit': '2', 'count': 0},
    {'digit': '3', 'count': 0},
    {'digit': '4', 'count': 0},
    {'digit': '5', 'count': 0},
    {'digit': '6', 'count': 0},
    {'digit': '7', 'count': 0},
    {'digit': '8', 'count': 0},
    {'digit': '9', 'count': 0}
  ]
  for (let i = 0; i < nums.length; i++) {
    counters[+nums[i]].count++
  }
  return counters.filter(elem => elem.count > 0).sort((a, b) => a.count > b.count ? -1 : 1).map(elem => elem['digit'].repeat(elem.count)).join('')
}

module.exports = challenge
