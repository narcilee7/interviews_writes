function shallowClone(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;

  const result = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  }
}

const copy1 = shallowClone(obj);
console.log(copy1);

obj.c.d = 5655555;
obj.a = 9999;

console.log(copy1);
console.log(obj);