import React from 'react';
import Bubble from './bubble';

const BubbleRow = (props) => {
  let bubbles = props.bubbles.map((valuesArray) => {
    return (
      <Bubble
         key={valuesArray[1]}
         value={valuesArray[0]}
         onClick={() => { props.onClick(valuesArray[1]); }}
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
