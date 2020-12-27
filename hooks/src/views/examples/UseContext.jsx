/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext';
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
  // mal
  const { state, setState } = useContext(DataContext);

  function addNumber(delta) {
    setState({
      ...state,
      number: state.number + delta,
    });
  }
  // bem
  const { number, text, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercicio 01" />
      <div className="center">

        <span className="text">
          {state.text}
        </span>
        <span className="text">
          {state.number}
        </span>
        <div>
          <button
            onClick={() => addNumber(-1)}
            type="button"
            className="btn"
          >
            -1
          </button>
          <button
            onClick={() => addNumber(+1)}
            type="button"
            className="btn"
          >
            +1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercicio 02" />
      <div className="center">
        <span className="text">
          {text}
        </span>
        <span className="text">{number}</span>
        <div>
          <button
            onClick={() => setNumber(number - 1)}
            type="button"
            className="btn"
          >
            -1
          </button>
          <button
            onClick={() => setNumber(number + 1)}
            type="button"
            className="btn"
          >
            +1
          </button>
        </div>
      </div>

    </div>
  );
};

export default UseContext;
