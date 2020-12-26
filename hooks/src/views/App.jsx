/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

// import DataContext, { data } from '../data/DataContext';
// import Store from '../data/Store';

// const [state, setState] = useState(data);
const App = (props) => (
  // <Store>
  //   <DataContext.Provider value={{ state, setState }}>
  <div className="App">
    <Router>
      <Menu />
      <Content />
    </Router>
  </div>
  //   </DataContext.Provider>
  // </Store>
);

export default App;
