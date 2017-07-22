import React from 'react';
import Bubble from './bubble';

class Game extends React.Component {
  state = {id: 1, values: '000000000000000'};

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/games/${this.state.id}`)
    .then(response => {
      return response.text();
    })
    .then (body => {
      return JSON.parse(body);
    })
    .then (json => {
      this.setState({
        values: json.state
      });
    })
  }

  bubbleOnClick = (index) => {
    const body = JSON.stringify({
      bubbleToPop: index
    });
    fetch(`http://localhost:3000/api/v1/games/${this.state.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body
    })
  };

  render() {
    const bubbles = this.state.values.split('').map((val, index) => {
      return (
        <Bubble
          key={index}
          value={val}
          onClick={() => { this.bubbleOnClick(index); }}
        />
      );
    });

    return(
      <div>
        {bubbles}
      </div>
    );
  }
}

export default Game;
