import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FlipMove from 'react-flip-move';

class Image extends Component {

    constructor() {
        super()
        this.state = {
            clicked: false
        };
    }

    isClicked() {
        if (this.state.clicked === true) {
            console.log("Clicked -------")
            this.props.resetPoints();

        }
        else {
            this.setState({
                clicked: true
            });
            this.props.points();
        }
    }

    render() {
        return (
            <FlipMove>
            <Col sm={4} md={4} lg={4}>
            <img src={this.props.img} alt="img" width="100" height="100" onClick={this.isClicked.bind(this)} />
            </Col>
            </FlipMove>
        );
    }
}

export default Image;
