import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';

class Registration extends Component {
    OnClick() {
        alert('account created');
        var login = document.getElementById('registration-form-login').value;
        var password = document.getElementById('registration-form-password').value;
        console.log(login, password);
        axios.post('/api/accounts/', {
            login: login,
            password: password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="Registration">
                <h1>Registration</h1>
                <input className= 'Registration_input' id='registration-form-login'/>
                <input id='registration-form-password'/>
                <button onClick={this.OnClick}>Register</button>
            </div>
        );
    }

}
export default Registration;
