export default function http(url, method) {

  var promise = new Promise(function(resolve, reject) {

    var req = new XMLHttpRequest();
    req.open(method, url);
    req.withCredentials = true;

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });

  return promise;
}
