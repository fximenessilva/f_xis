/* eslint-disable no-empty */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import PageTitle from '../../components/layout/PageTitle';

function sum(a, b) {
  const future = Date.now() + 1000;
  while (Date.now() < future) {}
  return a + b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  const [dark, setDark] = useState(false);

  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  const themeStyles = {
    padding: '2px 10px',
    margin: '30px',
    borderRadius: '10px',
    backgroundColor: dark ? 'white' : '#0092c3',
    color: dark ? '#0092c3' : 'white',
  };

  return (
    <div className="UseMemo">
      <PageTitle
        title="Hook UseMemo"
        subtitle="Retorna um valor memoizado!"
      />
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />

        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />

        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />

        <span
          className="text"
          style={themeStyles}
        >
          {result}

        </span>
        <button
          type="button"
          className="btn"
          onClick={() => { setDark(!dark); }}
        >
          CHANGE
        </button>
      </div>

    </div>

  );
};

export default UseMemo;
