/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import Index from '.app/index'
type Props = {};
export default class App extends Component<Props> {
  renderScene(route, navigator){
    return(
      <Index />
    )
  }
  render() {
    return (
      <Navigator 
      renderScene={this.renderScene}
      />
    );
  }
}