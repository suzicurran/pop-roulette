import React from 'react';

const Bubble = (props) => {
  return (
    <p onClick={props.onClick}>{props.value}</p>
  );
}

export default Bubble;
