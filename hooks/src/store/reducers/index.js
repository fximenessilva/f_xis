/* eslint-disable import/prefer-default-export */
/* eslint-disable radix */
import numberReducer from './number';
import userReducer from './user';

export default function reducer(state, action) {
  const newState = numberReducer(state, action);
  return userReducer(newState, action);
}
