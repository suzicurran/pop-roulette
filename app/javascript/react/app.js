import React from 'react';
import Game from './src/game';


class App extends React.Component {
  state = {name: 'Robot'};

  render() {
    return(
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
