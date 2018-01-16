import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import imgUrls from './components/imgUrls.js';
import Image from './components/Image.js';
import { Row, Grid } from 'react-bootstrap';
import shuffle from 'shuffle-array';

class App extends Component {
  state = {
    points: 0,
    highScore: 0,
    images: imgUrls
  };

  handleRoundWin = () => {
    this.setState({ points: this.state.points + 1 });
    this.shuffleImages();
    this.setState({ handleRoundLoss: this.state.points });

  };

  handleRoundLoss = () => {
    if (this.state.points > this.state.highScore) {
      this.setState({ highScore: this.state.points });
    }

    this.setState({ points: 0 });

    this.shuffleImages();
  };

  shuffleImages() {
    const shuffled = [...this.state.images]; // copy array
    console.log(shuffled);
    shuffle(shuffled);
    this.setState({ images: shuffled }); // set shuffled array back into state, React will re-render
  }

  componentDidMount() {
    this.shuffleImages();
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
        <div>high score:{this.state.highScore}</div>
        <Grid>
          <Row>
            {this.state.images.map((url, i) => {
              return <Image
                img={url}
                key={url}
                onRoundWin={this.handleRoundWin}
                onRoundLoss={this.handleRoundLoss}
              />;
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
