/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';

const initialState = {
  cart: [],
  products: [],
  user: null,
  number: 0,
};

function reducer(state, action) {
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
    case 'LOGIN':
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [inputNumber, setInputNumber] = useState(0);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: 'ADD_2_TO_NUMBER' })}
          >
            +2
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: 'MULTIPLY_7_TO_NUMBER' })}
          >
            *7
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: 'DIVIDE_25_TO_NUMBER' })}
          >
            /25
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: 'GET_INTEGER' })}
          >
            GET INTEGER
          </button>
          <div className="center">
            <input
              onChange={(e) => { setInputNumber(e.target.value); }}
              type="number"
              className="input"
            />
            <button
              type="button"
              className="btn"
              onClick={() => dispatch({ type: 'MULTIPLY_X_TO_NUMBER', payload: inputNumber })}
            >
              {inputNumber}

            </button>
          </div>
        </div>
      </div>

      <div className="center">
        {state?.user?.name
          ? <span className="text">{state.user.name}</span>
          : (
            <div>
              <button
                className="btn"
                type="button"
                onClick={() => dispatch({ type: 'LOGIN', payload: 'Maria' })}
              >
                LOGIN
              </button>
            </div>
          )}

      </div>
    </div>
  );
};

export default UseReducer;
