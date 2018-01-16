import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import imgUrls from './imgUrls.js';

class Image extends Component {
    state = {
        clicked: false,
        imgUrls: false
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
        // if (this.props.img === ){}
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
                    /*added (()=> in class to make this a call back to see if it binds the clickhandler to the url*/
                />
            </Col>
        );
    }
}

export default Image;
