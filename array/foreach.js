/**
 * 遍历数组每一项，执行cb，无返回值
 */

Array.prototype.myForEach = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    // 稀疏数组
    if (arr.hasOwnProperty(i)) {
      callback.call(thisArg, arr[i], i, arr);
    }
  }
}