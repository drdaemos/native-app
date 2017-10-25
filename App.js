import React from 'react';
import { createStore } from 'redux'
import PageView from './components/PageView';
import xcartApp from './reducers'

function getInitialState() {
  return {};
}

let store = createStore(xcartApp, getInitialState())

export default class App extends React.Component {
  render() {
    return (
      <PageView store={store} />
    );
  }
}