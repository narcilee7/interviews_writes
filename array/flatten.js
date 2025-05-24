function flattenES5(arr, dep) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && dep > 0) {
      result.push(...flattenES5(arr[i], dep - 1));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const arr = [1, [2, [3, [4, [5]]]]];

console.log(flattenES5(arr, 2));

function flattenES6(arr, dep) {
  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && dep > 0) {
      return [...acc, ...flattenES6(val, dep - 1)];
    } else {
      return [...acc, val];
    }
  }, []);
}

console.log(flattenES6(arr, 2));