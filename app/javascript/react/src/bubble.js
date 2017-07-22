import React from 'react';

const Bubble = (props) => {
  let cx = 'bubble';
  if (props.value === '1') {
    cx = 'bubble-popped';
  }
  return (
    <td className={cx} onClick={props.onClick} />
  );
}

export default Bubble;
