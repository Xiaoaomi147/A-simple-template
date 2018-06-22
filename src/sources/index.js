/*
 * @Author: shifan
 * @Date: 2018-04-16 16:19:42
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-21 16:37:41
 * @功能: {}
 */

import { combineReducers } from 'redux';
import userStore from './user';
import getOne from './getone';

export default combineReducers({
  userStore,
  getOne,
});
