import React, {Component} from 'react';
import './style.css';
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
                <div className="registration-content">
                    <div>
                        <h1>Registration</h1>
                        <div className="registration-form-group">
                            <label htmlFor='registration-form-login'>Login: </label>
                            <input className='Registration_input' id='registration-form-login'/>
                        </div>
                        <div className="registration-form-group">
                            <label htmlFor='registration-form-password'>Password: </label>
                            <input id='registration-form-password'/>
                        </div>
                    </div>
                    <div className='registration-button-container'>
                        <button onClick={this.OnClick}>Register</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Registration;
