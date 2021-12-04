import React, { Component, useState } from 'react'
import Header from './bootstrap/Header';

class App extends Component {
  state = {
    Dark: true
  };

  toggleHeader = () => {
    this.setState({
      Dark: !this.state.Dark
    })
  };

  render() {
    return (
      <div className="App">
        {/* <h1>Hello Satyansh</h1> */}
        <Header dark={this.state.Dark} className="mb-5">Satyansh Portfolio Genrator</Header>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <button className="btn btn-primary" onClick={this.toggleHeader}>Toggle Mode</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
