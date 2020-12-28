/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import { initialState, reducer } from '../../store';
import { numberAdd2, login } from '../../store/actions';

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
            onClick={() => numberAdd2(dispatch)}
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
              x
              {' '}
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
                onClick={() => login(dispatch, 'fran')}
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
