import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imgUrls from './components/imgUrls.js';
import Image from './components/Image.js';
import { Row, Grid } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super()
    this.state = {
      points: 0
    };
  }
  handleIncrement = () => {
    this.setState({ points: this.state.points + 1 });
  };
  resetPoints = () => {
    this.setState({ points: 0 });
  }
  resetTruthy = () => {
    this.state({ clicked: false });
  }
  shuffleDogs = () => {

  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fun Memory Game</h1>

        </header>
        <p className="App-intro">
          Click an image to begin. Lets see how good your memory is.
        </p>
        <div>points:{this.state.points}</div>
        <Grid>
        <Row>
        {
        imgUrls.map((Url, i) => {
        // console.log("index Number: ", i)
        let array = [];
         for (let i = 0; i < 12; i++) {

            let random = Math.floor(Math.floor(Math.random() * 2));
         array.push(<Image img={Url[random].url} data-name = { imgUrls[random].name }key={(i + 1) * Math.random() * 99 } points={this.handleIncrement.bind(this)} resetPoints = {this.resetPoints.bind(this)}/>);
        }
        return array;
        })

        }
        </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
