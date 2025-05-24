const getJSON = function (url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest() ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.status);
        }
      }
    };
    xhr.send();
  })
}