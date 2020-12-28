/* eslint-disable import/prefer-default-export */
export function login(dispatch, name) {
  dispatch({
    type: 'LOGIN',
    payload: name,
  });
}
