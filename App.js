/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppNavigator from "./App/Base/AppNavigator";

export default class App extends Component<{}> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
