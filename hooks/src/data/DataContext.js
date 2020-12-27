import { createContext } from 'react';

export const data = {
  number: 123,
  text: 'context API...',
};

const DataContext = createContext(null);

export default DataContext;
