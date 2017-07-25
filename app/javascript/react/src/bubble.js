import React from 'react';

const Bubble = (props) => {
  let bubbleState = (props.value === '0') ? 'bubble' : 'bubble-popped';
  return (
    <td id={`bubble_${props.bubbleIndex}`} className={bubbleState} onClick={() => { props.clickHandler(props.bubbleIndex) }} />
  );
}

export default Bubble;
