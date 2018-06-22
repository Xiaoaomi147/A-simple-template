
import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger';
import rootReducer from '../sources';


const sagaMiddleware = createSagaMiddleware();
// const logger = store => next => action => {
//     if (typeof action === 'function') console.log('------->>dispatching a function');
//     else console.log('------->>dispatching', action);
//     let result = next(action);
//     console.log('------->>next state', store.getState());
//     return result;
// }
export default function configureStore(initialState = {}) {
  const middlewares = [sagaMiddleware, createLogger];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

    // 将reducer组合起来
    // const reducer = combineReducers(reducers);
  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers),
  );

    // 创建store
    // store.asyncReducers = {};
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
