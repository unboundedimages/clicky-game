import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FlipMove from 'react-flip-move';
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
        <FlipMove>
        <Grid>
        <Row>
        {
        imgUrls.map((Url, i) => {
         return <Image img={Url} key={i} points={this.handleIncrement.bind(this)} resetPoints = {this.resetPoints.bind(this)}/>;
        }
        )
        }
        </Row>
        </Grid>
        </FlipMove>
      </div>
    );
  }
}

export default App;
