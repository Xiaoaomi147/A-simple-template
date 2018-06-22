import { take, fork } from 'redux-saga/effects';
import * as authorizeActions from '../actions';
import api from '../utils/api';
import { fetchResource } from '../utils/sagaHelper';

const fetchLoginUserApi = fetchResource.bind(null, authorizeActions, api.loginG);
// const fetchLoginGetDataApi = fetchResource.bind(null, authorizeActions, api.getData);

function* WatchUserLoginIn() {
  while (true) {
    const { payload } = yield take(authorizeActions.USER_LOGIN_IN);
    yield fork(fetchLoginUserApi, payload);
  }
}

// function* watchGet() {
//     while(true) {
//       yield take(authorizeActions.USER_LOGIN_GET);
//       const { data, error } = yield call(api.getData);
//       if (!error) {
//         yield put(authorizeActions.getone(data));
//         } else {
//         yield put(authorizeActions.failure(error));
//         }
//     }
// }

export default function* rootSaga() {
  yield fork(WatchUserLoginIn);
  // yield fork(watchGet);
}
