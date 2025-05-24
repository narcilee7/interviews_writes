/**
 * 数组去重
 */

const arr = [1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]

function uniqueES5(arr) {
  if (!Array.isArray(arr)) return;
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const newArr = uniqueES5(arr);

console.log(newArr);

function uniqueES6(arr) {
  if (!Array.isArray(arr)) return;
  return [...new Set(arr)];
}

console.log(uniqueES6(arr));