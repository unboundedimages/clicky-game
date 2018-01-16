import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Image extends Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        if (this.state.clicked === true) {
            console.log("Clicked -------");
            alert("You Already Clicked Me, Start Over!!");
            this.props.onRoundLoss();
            this.resetTruthy();
        }
        else {
            this.setState({ clicked: true });
            console.log(this.props);
            this.props.onRoundWin();
        }
    }

    resetTruthy() {
        if (this.state.clicked === true) {
            this.setState({ clicked: false });
        }
    }

    render() {
        return (
            <Col sm={4} md={4} lg={4}>
                <img
                    src={this.props.img}
                    alt="img"
                    width="100"
                    height="100"
                    onClick={this.handleClick}
                />
            </Col>
        );
    }
}

export default Image;
