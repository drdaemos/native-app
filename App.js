import React from 'react';
import {
  AppRegistry,
} from 'react-native';
import AppContainer from './components/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

AppRegistry.registerComponent('App', () => App);