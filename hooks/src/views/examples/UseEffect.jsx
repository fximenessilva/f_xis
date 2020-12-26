/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-duplicates */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calcFactorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  if (n > 0) return calcFactorial(n - 1) * n;
  return null;
}

const UseEffect = (props) => {
  const [num, setNum] = useState(1);
  const [factorial, setFactorial] = useState(1);
  const [par, setPar] = useState('');

  useEffect(() => {
    setFactorial(calcFactorial(num));
  }, [num]);

  useEffect(() => {
    setPar(num % 2 === 0 ? 'Par' : 'Impar');
  }, [num]);

  useEffect(() => {
    if (factorial > 1000000) {
      document.title = 'Fuck';
    } else {
      document.title = 'React App';
    }
  }, [factorial]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <input
          value={num}
          className="input"
          type="number"
          onChange={(e) => setNum(e.target.value)}
          placeholder={num}
        />
        <div>
          <span className="text">Factorial: </span>
          <span className="text red">{factorial <= -1 ? 'Nao existe' : factorial}</span>
        </div>
      </div>
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <span className="text">Status: </span>
        <span className="text red">
          {par}
        </span>

        <span className="text">{num % 2 === 0 ? 'par' : 'impar'}</span>

      </div>
    </div>

  );
};

export default UseEffect;
