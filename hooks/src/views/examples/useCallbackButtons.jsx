/* eslint-disable react/prop-types */
import React from 'react';

const UseCallbackButtons = (props) => {
  console.log('render....');
  return (
    <div>
      <button
        onClick={() => props.inc(6)}
        type="button"
        className="btn"
      >
        +6
      </button>
      <button
        onClick={() => props.inc(12)}
        type="button"
        className="btn"
      >
        +12
      </button>
      <button
        onClick={() => props.inc(18)}
        type="button"
        className="btn"
      >
        +18

      </button>
    </div>
  );
};

export default React.memo(UseCallbackButtons);
