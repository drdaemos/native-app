import React from 'react';
import ScreenNavigator from './ScreenNavigator';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import xcartApp from '../reducers'

function getInitialState() {
  return {
    categories: [
        {name: 'Test Categories', id: 1}
    ],
  };
}

let store = createStore(xcartApp, getInitialState())

export default class AppContainer extends React.Component {
  render() {
    return (      
      <Provider store={store}>
        <ScreenNavigator store={this.props.store} />
      </Provider>
    );
  }
}