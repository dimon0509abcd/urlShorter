import React, { Component } from 'react';
import './App.css';
import Registration from './components/registration/Registration';
import LoginForm from './components/Login_form/LoginForm';
import UrlCreator from "./components/UrlCreator/UrlCreator";
import CreatedUrls from './components/CreatedUrls/CreatedUrls';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LoginForm/>
          <Registration/>
          <UrlCreator/>
          <CreatedUrls/>
      </div>
    );
  }
}

export default App;
