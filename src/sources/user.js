/*
 * @Author: shifan
 * @Date: 2018-04-16 16:03:18
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-21 16:36:39
 * @功能: {}
 */


import {
  USER_LOGIN_IN,
  REQUEST_COMPELTED,
  REQUEST_FAILED,
  REQUEST_STARTED,
  RESET_AUTHRIZATION_RESULT,
} from '../actions';
// import _ from 'lodash';

const defaultUserState = {
  status: null,
  userLogin: {},
  result: false,
  isFetching: false,
};
export default function Users(state = defaultUserState, action) {
  // console.log('------->>    state',state);
  console.log('------->>  action', action);
  switch (action.type) {
    case REQUEST_COMPELTED:
      return {
        ...state,
        status: action.type,
        result: true,
        isFetching: false,
        authrization: action.payload,
      };
    case REQUEST_STARTED:
      return {
        ...state,
        status: action.type,
        isFetching: true,
      };
    case USER_LOGIN_IN:
      return {
        ...state,
        status: action.type,
        userLogin: action.payload,
        isFetching: true,
      };
    case REQUEST_FAILED:
      return {
        ...state,
        status: action.type,
        userLogin: action.payload,
        isFetching: false,
      };
    case RESET_AUTHRIZATION_RESULT:
      return {
        ...state,
        result: false,
      };
    default:
      return state;
  }
}
