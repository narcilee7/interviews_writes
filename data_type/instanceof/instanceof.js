function myInstanceOf(obj, constructor) {
  if (obj === null || typeof obj !== 'object') return false;
  let proto = Object.getPrototypeOf(obj);
  const prototype = constructor.prototype;
  while (proto) {
    if (proro === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}