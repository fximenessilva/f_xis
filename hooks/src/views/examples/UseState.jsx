/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import DataContext from '../../data/DataContext';

const UseState = (props) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const { state, setState } = useContext(DataContext);

  return (
    <div className="UseState">

      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">
          {count}
        </span>
        <div>
          <button
            type="button"
            className="btn"
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setCount((current) => current * 100)}
          >
            *100
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => setCount((current) => current / 100)}
          >
            /100
          </button>
        </div>
      </div>
      <SectionTitle title="Exercicio #02" />
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="text">{name}</span>
      <span className="text">
        CONTEXT (teste):
        {' '}
        {state.number}
      </span>
    </div>
  );
};
export default UseState;
