import React from 'react';
import BubbleRow from './bubbleRow';
import popRouletteUrl from './constants/popRouletteUrl'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: 1, values: '000000000000000'};
  }

  componentDidMount() {
    fetch(`${popRouletteUrl}/api/v1/games/${this.state.id}`)
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

    App.games = App.cable.subscriptions.create('GamesChannel', {
      received: (data) => {
        this.updateBubbles(data)
      },
    });
  }

  bubbleOnClick = (index) => {
    const body = JSON.stringify({
      bubbleToPop: index
    });

    fetch(`${popRouletteUrl}/api/v1/games/${this.state.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body
    })
  }

  updateBubbles(data) {
    this.setState({
      values: data.state
    })
  };

  render() {
    const bubbles = this.state.values.split('').map((elt, index) => {
      return [elt, index]
    });

    const bubbleSections = [bubbles.slice(0,4),bubbles.slice(4,8),bubbles.slice(8,12),bubbles.slice(12,16)]

    let b = bubbleSections.map((section) => {
      return <BubbleRow
       onClick={this.bubbleOnClick}
       bubbles={section} />
    });

    return(
      <table>
        <tbody>
          {b}
        </tbody>
      </table>
    );
  }
}

export default Game;
