export default function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}
