import { createAction } from 'redux-actions';

export const USER_LOGIN_IN = 'USER_LOGIN_IN';
export const userLogin = createAction(USER_LOGIN_IN);

export const USER_LOGIN_GET = 'USER_LOGIN_GET';
export const getone = createAction(USER_LOGIN_GET);

export const RESET_AUTHRIZATION_RESULT = 'RESET_AUTHRIZATION_RESULT';
export const resetAuthrizationResult = createAction(RESET_AUTHRIZATION_RESULT);

// export const REQUEST_STARTED = Symbol();
// export const REQUEST_COMPELTED = Symbol();
// export const REQUEST_FAILED = Symbol();

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_COMPELTED = 'REQUEST_COMPELTED';
export const REQUEST_FAILED = 'REQUEST_FAILED';
export const request = createAction(REQUEST_STARTED);
// return 2nd argument as `meta` field
export const success = createAction(REQUEST_COMPELTED, null, (...args) => args[1]);
export const failure = createAction(REQUEST_FAILED);
