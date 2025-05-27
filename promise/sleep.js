function mySetTimeout(callback, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(callback());
    }, delay);
  });
}