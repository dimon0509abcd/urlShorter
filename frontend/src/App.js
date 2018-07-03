import React, { Component } from 'react';
import './App.css';
import Registration from './components/registration/registration';
import LoginForm from './components/Login_form/LoginForm';
import UrlCreator from "./components/UrlCreator/UrlCreator";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm/>
        <UrlCreator/>
      </div>
    );
  }
}

export default App;
