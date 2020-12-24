/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Button.css';

export default (props) => (

  <button
    onClick={(e) => props.click && props.click(props.label)}
    type="button"
    className={`
    button 
    ${props.operation ? 'operation' : ''}
    ${props.double ? 'double' : ''}
    ${props.triple ? 'triple' : ''}
    
    `}
  >
    {props.label}
  </button>

);
