/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './SectionTitle.css';
import React from 'react';

const SectionTitle = (props) => (
  <div className="SectionTitle">
    <h3>{props.title}</h3>
  </div>
);

export default SectionTitle;
