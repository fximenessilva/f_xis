/* eslint-disable radix */
export default function numberReducer(state, action) {
  switch (action.type) {
    case 'ADD_2_TO_NUMBER':
      return { ...state, number: state.number + 2 };
    case 'MULTIPLY_7_TO_NUMBER':
      return { ...state, number: state.number * 7 };
    case 'DIVIDE_25_TO_NUMBER':
      return { ...state, number: state.number / 25 };
    case 'GET_INTEGER':
      return { ...state, number: parseInt(state.number) };
    case 'MULTIPLY_X_TO_NUMBER':
      return { ...state, number: state.number * action.payload };

    default:
      return state;
  }
}
