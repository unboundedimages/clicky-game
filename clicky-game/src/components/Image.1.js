import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

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
            alert("You Already Clicked Me, Start Over!!")
            // this.props.resetPoints();
            this.state = {
                clicked: false
            }
            this.props.resetPoints();
        }
        else {
            this.setState({
                clicked: true
            });
            this.props.points();
        }

        // are you still here?  I want

        // // resetTruthy = () => {
        // //             this.state({ clicked: false });
        // //         }

    }

    render() {
        return (
            <Col sm={4} md={4} lg={4}>
            <img src={this.props.img} alt="img" width="100" height="100" onClick={this.isClicked.bind(this)} />
            </Col>
        );
    }
}

export default Image;
