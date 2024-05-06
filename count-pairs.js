function countPairs(arr, target) {
  const seen = new Set();
  let count = 0;

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      count++;
      seen.delete(complement);
    } else {
      seen.add(num);
    }
  }

  return count;
}

module.exports = countPairs;
