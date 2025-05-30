/**
 * JSONP：script标签不受同源策略约束，所以可以用来进行跨域请求，优点是兼容性好，但是只能用GET请求
 */

const jsonp = ({ url, params, callbackName }) => {
  const generateUrl = () => {
    let dataSrc = '';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}&`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`;
  }
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script');
    scriptEle.src = generateUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.body.removeChild(scriptEle);
    }
  })
}