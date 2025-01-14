import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';
import Demo from "./Demo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="text-red-500">First React Page!!!</div>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => navigation.navigate('Demo')}>
        Go to Demo
      </button>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
  }
}

export default App;
