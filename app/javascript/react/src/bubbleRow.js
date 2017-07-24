import React from 'react';
import Bubble from './bubble';

const BubbleRow = (props) => {
  let bubbles = props.bubbles.map((bubble) => {
    return (
      <Bubble
         key={bubble.bubbleIndex}
         bubbleIndex={bubble.bubbleIndex}
         value={bubble.value}
         clickHandler={props.clickHandler}
       />
   );
  });

  return (
    <tr>
      {bubbles}
    </tr>
  );
}

export default BubbleRow;
