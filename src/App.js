import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  sendDummData = () => {
    this.props.webSocket.send('hello');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.sendDummData}>Click me!</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Final Project!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
