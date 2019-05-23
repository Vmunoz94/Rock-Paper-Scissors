import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {
  updateChoice,
  updateWinner,
} from './redux/finalActions';

class App extends React.Component {
  // sendDummData = () => {
  //   this.props.webSocket.send("Hello");
  // }
  componentDidUpdate(){
    if (this.props.choice === "" || this.props.otherPlayer.choice === ""){
      this.props.updateWinner("");
      return
    }

    if (this.props.choice === this.props.otherPlayer.choice){
      this.props.updateWinner("Tie")
    }
    else if (this.props.choice === "Rock" && this.props.otherPlayer.choice === "Scissors"){
      this.props.updateWinner("Player " + String(this.props.id))
    }
    else if (this.props.choice === "Paper" && this.props.otherPlayer.choice === "Rock"){
      this.props.updateWinner("Player " + String(this.props.id))
    }
    else if (this.props.choice === "Scissors" && this.props.otherPlayer.choice === "Paper"){
      this.props.updateWinner("Player " + String(this.props.id))
    }
    else {
      this.props.updateWinner("Player " + String(this.props.otherPlayer.id))
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Rock, Paper, Scissors</h2>
          <div className="display">
            <div>
              Player { this.props.id }: { this.props.choice }
            </div>
            <div>
              Player { this.props.otherPlayer.id }: { this.props.otherPlayer.choice }
            </div>
            <div>
              Winner: { this.props.winner }
            </div>
          </div>

          <div className="buttons">
            <button onClick={() => {
              this.props.updateChoice("Rock");
              this.props.webSocket.send(JSON.stringify(
                {
                  id: this.props.id,
                  choice: "Rock"
                }
                ))}}>
              Rock
            </button>

            <button onClick={() => {
              this.props.updateChoice("Paper");
              this.props.webSocket.send(JSON.stringify(
                {
                  id: this.props.id,
                  choice: "Paper"
                }
                ))}}>
              Paper
            </button>

            <button onClick={() => {
              this.props.updateChoice("Scissors");
              this.props.webSocket.send(JSON.stringify(
                {
                  id: this.props.id,
                  choice: "Scissors"
                }
                ))}}>
              Scissors
            </button>
            <div>
              <button onClick={() => {
                this.props.webSocket.send("Reset");
              }}>
                Reset
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.finalReducer.id,
    choice: state.finalReducer.choice,
    otherPlayer: state.finalReducer.otherPlayer,
    winner: state.finalReducer.winner
  };
};

const mapDispatchToProps = {
  updateChoice,
  updateWinner,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
