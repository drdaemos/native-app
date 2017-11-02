import React from 'react';
import ScreenNavigator from './ScreenNavigator';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import xcartApp from '../reducers'

let store = createStore(xcartApp)

export default class AppContainer extends React.Component {
  render() {
    return (      
      <Provider store={store}>
        <ScreenNavigator store={this.props.store} />
      </Provider>
    );
  }
}