/*
 * @Author: shifan
 * @Date: 2018-06-13 14:57:45
 * @Last Modified by: shifan
 * @Last Modified time: 2018-06-21 17:08:02
 * @功能: {}
 */

import { call, put } from 'redux-saga/effects';

export function* fetchResource(resource, api, payload) {
  console.log('---------->1', resource);
  console.log('---------->2', api);
  console.log('---------->3', payload);
  //   console.log('---------->4',resource.request(payload))
  yield put(resource.request(payload));
  const { data, error } = yield call(api, payload);
  if (!error) {
    console.log('userSuccess', data, payload);
    yield put(resource.success(data, payload));
  } else {
    yield put(resource.failure(error, payload));
  }
}
