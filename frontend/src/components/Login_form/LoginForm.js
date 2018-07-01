import React, { Component } from 'react';
//import './App.css';
import axios from 'axios';

class LoginForm extends Component {
    state = {
        error : false
    };

    OnClick() {
        var login = document.getElementById('login-form-login').value;
        var password = document.getElementById('login-form-password').value;
        console.log(login, password);
        var vm = this;
        axios.put('/api/accounts/', {
            login: login,
            password: password
        })
            .then(function (response) {
                if(response.data.result !== undefined){
                    localStorage.setItem('id', response.data.result);
                    vm.SetErrorToState(false);
                }
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
                vm.SetErrorToState(true);
            });
        document.getElementById('login-form-login').value = '';
        document.getElementById('login-form-password').value = '';
    }

    SetErrorToState(error){
        this.setState({error : error})
    }

    render(){
        return (
            <div className="login-form">
                <input className= 'login-input' id='login-form-login'/>
                <input id='login-form-password'/>
                <button onClick={this.OnClick.bind(this)}>LogIn</button>
                {(this.state.error === true)&&<span>Wrong login or password</span>}
            </div>
        );
    }
}
export default LoginForm;