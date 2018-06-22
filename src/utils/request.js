/*
 * @Author: shifan
 * @Date: 2018-06-13 14:57:34
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-21 16:41:28
 * @功能: {}
 */

function parseJSON(response) {
  return response;
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch((error) => {
      if (error) {
        alert('网络出错啦！');
      }
      return { error };
    });
}
