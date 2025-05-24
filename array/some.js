Array.prototype.mySome = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    // 稀疏数组
    if (arr.hasOwnProperty(i) && callback.call(thisArg, arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}