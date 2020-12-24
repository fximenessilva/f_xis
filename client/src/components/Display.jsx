/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

import './Display.css';

export default (props) => {
  
  return(
  <div className={`
  display 
  ${props.value.toString().length > 10 ? 'displayLength1' : ''}
  ${props.value.toString().length > 13 ? 'displayLength2' : ''}
  ${props.value.toString().length > 16 ? 'displayLength3' : ''}
  ${props.value.toString().length > 19 ? 'displayLength4' : ''}
  `}
  >


    {props.value}
  </div>
  )
}
  

