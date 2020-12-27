/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';

const initialState = {
  number: 1212,
  text: 'Context API + Hooks',
};

export const AppContext = createContext(initialState);

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({
      ...state,
      [key]: value,
    });
  }
  const value = {
    number: state.number,
    text: state.text,
    setNumber: (n) => updateState('number', n),
    setText: (str) => updateState('text', str),
  };

  return (
    <AppContext.Provider value={value}>
      <div>
        {children}
      </div>
    </AppContext.Provider>
  );
};

export default Store;
