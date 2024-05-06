// add whatever parameters you deem necessary
function constructNote(message, letters) {
  let counterOne = {};
  let counterTwo = {};

  for (let char of message) {
    counterOne[char] = (counterOne[char] || 0) + 1;
  }

  for (let char of letters) {
    counterTwo[char] = (counterTwo[char] || 0) + 1;
  }

  for (let char in counterOne) {
    if (!counterTwo[char] || counterTwo[char] > counterOne[char]) {
      return false;
    }
  }
}

module.exports = constructNote;
