
import React from 'react';

import { CreateStore, applyMiddleware } from 'redux';
import {
    StyleSheet,
    View,
    ActivityIndicator,
    AppRegistry
} from 'react-native';

export default class LoadingSpinner extends React.Component {
    render() {
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#ff0000" />
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })