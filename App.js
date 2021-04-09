import React, { Component } from 'react';
import Route from './app/route.js';
import {LogBox} from 'react-native'
LogBox.ignoreAllLogs();//Ignore all log notifications

class App extends React.Component {
  constuctor(props) { }
  render() {
    return (
      <Route />
    );
  }
};

export default App;
