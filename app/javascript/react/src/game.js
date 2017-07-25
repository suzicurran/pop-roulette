import React from 'react';
import BubbleRow from './bubbleRow';
import popRouletteUrl from './constants/popRouletteUrl'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {id: 1, values: '0000000000000000'};
    this.bubbleOnClick = this.bubbleOnClick.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  componentDidMount() {
    this.fetchState();

    App.games = App.cable.subscriptions.create('GamesChannel', {
      received: (data) => {
        this.updateBubbles(data.state)
      },
    });
  }

  fetchState() {
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
  }

  updateBubbles(newValues) {
    this.setState({
      values: newValues
    })
  };

  bubbleOnClick = (index) => {
    const newValues = this.state.values.substr(0,index) + '1' + this.state.values.substr(index+1)
    this.updateBubbles(newValues);

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

  handleReset(event) {
    event.preventDefault();
    fetch(`${popRouletteUrl}/api/v1/games/${this.state.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
    .then((response) => {
      this.fetchState();
    })
  }

  render() {
    const sideLength = Math.sqrt(this.state.values.length)
    let bubbleSections = []
    for(let i = 0; i < sideLength; i ++) {
      bubbleSections[i] = []
    }
    for(let i = 0; i < this.state.values.length; i++) {
      bubbleSections[i%sideLength].push({value: this.state.values[i], bubbleIndex: i})
    }

    let bubbleRows = bubbleSections.map((section, index) => {
      return <BubbleRow
        key={index}
        clickHandler={this.bubbleOnClick}
        bubbles={section} />
    });

    return(
      <div>
        <table>
          <tbody>
            {bubbleRows}
          </tbody>
        </table>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Game;
