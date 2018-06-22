
// import Cookies from 'js-cookie';
import request from './request';

const API_ROOT = 'https://hadev.cisystemsolutions.com/api/V1/';
// const Token = Cookies.get('Token');
function callApi(endpoint, options) {
  return request(`${API_ROOT}${endpoint}`, options);
}

function getPublishFetchOptions(body) {
  return {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
}

// function getUploadFetchOptions(body) {
//   return {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'multipart/form-data;charset=UTF-8'
//     },
//     body
//   };
// }
// function get(){
//     return {
//       method:'GET',
//       mode:'cors',
//       headers:{
//           'Content-Type':'application/json',
//           'Cache-Control':'no-cache',
//           'Authorization':'Bearer '+ Token
//       }
//   }
// }

export default {
  loginG: () => {
    const parmin = {
      UserName: 'admin@internal.com',
      PassWd: '111111',
    };
    const opt = getPublishFetchOptions(parmin);
    console.log('opt', opt);
    return callApi('login', opt);
  },
  getData: () => callApi('employees/sites/5aab444255bef35cb0883492/degree', null),
};
