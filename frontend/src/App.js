import React, { Component } from 'react';
import './App.css';
import Registration from './components/registration/Registration';
import LoginForm from './components/Login_form/LoginForm';
import UrlCreator from "./components/UrlCreator/UrlCreator";
import CreatedUrls from './components/CreatedUrls/CreatedUrls';

class App extends Component {
  render() {
      const isVisible = localStorage.getItem('id')!==null;
      console.log(isVisible);
      return (
      <div className="App">
          {isVisible === false &&<LoginForm/>}
          {isVisible === false &&<Registration/>}
          <UrlCreator/>
          <CreatedUrls/>
      </div>
    );
  }
}

export default App;
