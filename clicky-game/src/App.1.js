import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imgUrls from './components/imgUrls.js';
import ImageList from './components/ImageList.js';
import { Row, Grid } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.resetTruthy = this.resetTruthy.bind(this);
    this.state = {
      points: 0
    };
  }
  handleIncrement = () => {
    this.setState({ points: this.state.points + 1 });
  };

  resetTruthy = () => { //definition
    console.log("truthy!")
    this.forceUpdate()
    // this.setState({ clicked: false });
  }

  resetPoints = () => {
    this.setState({ points: 0 });
    this.resetTruthy();
  }

  shuffleDogs = () => {

  };
  // renderCards = () => imgUrls.map((Url, i) => {
  //   // console.log("index Number: ", i)
  //   return <Image img={Url} key={i} points={this.handleIncrement.bind(this)} resetPoints = {this.resetPoints.bind(this)}/>;
  // })


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
          <ImageList points={this.handleIncrement.bind(this)} resetPoints={this.resetPoints.bind(this)}></ImageList>
        }
        </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
