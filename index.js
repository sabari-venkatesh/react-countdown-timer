import React, { Component } from 'react';
import { render } from 'react-dom';
import Countdown from './Countdown';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Countdown seconds="10" />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
