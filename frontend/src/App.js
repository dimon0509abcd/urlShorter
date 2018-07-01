import React, { Component } from 'react';
import './App.css';
import Registration from './components/registration/registration';
import LoginForm from './components/Login_form/LoginForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm/>
      </div>
    );
  }
}

export default App;
