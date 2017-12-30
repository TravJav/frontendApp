import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AppRegistry,
  ImageBackground
} from 'react-native';



import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import Button from 'react-native-button';

import CreateUser from './Screens/NewUser';
import Login from './Screens/Login';

export default class App extends React.Component {
  render() {
    return (
      <Appnavigation />
    );
  }
}
/*
Navigation of the app is achieved through essentially pointing where we want our screens
*/
const Appnavigation = StackNavigator({
  HomeScreen: { screen: Login },
  CreateUser :{screen: CreateUser}
});


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
