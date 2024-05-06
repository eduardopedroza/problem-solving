function twoArrayObject(keys, values) {
  const obj = {};
  const maxLength = Math.max(keys.length, values.length);

  for (let i = 0; i < maxLength; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null;
  }

  return obj;
}

module.exports = twoArrayObject;
