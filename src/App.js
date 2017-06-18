import React, { Component } from 'react';
import logo from './newLogo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.min.css'
import Main from './components/wyse/Main'


class App extends Component {
  render() {
    return (
      <div>
        <Main
          logo={logo}
        />
      </div>
    );
  }
}

export default App;
