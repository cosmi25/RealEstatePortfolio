import React, { Component } from 'react';
import API from '../../utils/users';
import Background from "../../components/Background/Background";
import { Col, Row, Container } from "../../components/Grid";
import './Portfolio.css';

class Portfolio extends Component {
    state = {
        username: "",
        password: ""
    }

    handleLogin = (event) => {
        event.preventDefault();
        API.login(this.state).then(function (response) {
        })
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Background style={{}} backgroundImage="https://image.shutterstock.com/image-photo/property-real-estate-market-game-260nw-239874865.jpg">
                    <h1>Real Estate Portfolio</h1>
                    <h3>Simple and Convenient Management of Your Assets</h3>
                </Background>
                <Container fluid>
                    <Row>
                        <Col size="md-6 sm-12">
                            <h3 className='title'>
                                Welcome to the Real Estate Portfolio
                            </h3>
                            <p className='text'>
                                Real Estate Portfolio is a managemanent application for property owners.
                                It helps landlords take care of all their assets in one place.
                            </p>
                        </Col>
                        <Col size="md-6 sm-12">
                            <h4 className='title'>Let's Get Started!</h4>
                            {/* <SignUp>Sign Up</SignUp>
                            <Login>Login</Login> */}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Portfolio;