import React, { Component } from 'react'
import Header from './bootstrap/Header';

class App extends Component {
  state = {
    Dark: true
  };
  render() {
    return (
      <div className="App">
        {/* <h1>Hello Satyansh</h1> */}
        <Header dark={this.state.Dark}>Satyansh Portfolio Genrator</Header>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <button></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
