import fetch from "dva/fetch";

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
const baseURL = "http://jacklv.cn";
export default function request(url, options = {}) {
  if (options.method && options.method.toUpperCase() === "POST") {
    options.body = JSON.stringify(options.body);
    options.headers = {
      "content-type": "application/json",
    };
  }
  return (
    fetch(baseURL + url, options)
      /* .then(checkStatus)
  .then(parseJSON)
  .then(data => ({ data }))
  .catch(err => ({ err })); */
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 1) {
          return res.data;
        } else {
          return Promise.reject(res);
        }
      })
      .catch((err) => {
        console.log("err", err);
      })
  );
}
