// the below function has at least one bug
// modify the code without adding or removing any additional lines
// run grunt test to check

const challenge = function (values, max) {
  const output = []
  for (let i = 1; i <= max; i++) {
    let value = ''
    values.sort((a, b) => (a.number > b.number) ? 1 : -1).forEach((item, index) => {
      if (i % item.number === 0) {
        value += item.word
      }
    })
    output.push(value !== '' ? value : i)
  }
  // console.dir(output)
  return output
}

module.exports = challenge
