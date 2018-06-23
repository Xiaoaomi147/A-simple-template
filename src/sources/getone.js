/*
 * @Author: shifan
 * @Date: 2018-04-16 16:03:18
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-23 14:33:43
 * @功能: {}
 */


import { USER_LOGIN_GET } from '../actions';
import _ from 'lodash';

const defaultUserState = {
  status: null,
  getData: {},
};
export default function getOne(state = defaultUserState, action) {
  // console.log('------->>    state',state);
  console.log('------->>  getOne', action);
  switch (action.type) {
    case USER_LOGIN_GET:
      return {
        ...state,
        getData: action.payload,
      };
    default:
      return state;
  }
}
