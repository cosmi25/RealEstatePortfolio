import React, { Component } from 'react';
import API from '../../utils/users';

export default class Login extends Component {
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
                <h6>Login</h6>
                <form>
                    <input onChange={this.captureInput} name="username" />
                    <input onChange={this.captureInput} name="password" />
                    <button onClick={this.handleLogin}>Submit</button>
                </form>
            </div>

        )
    }
}