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
import { StackNavigator, TabNavigator} from 'react-navigation';
import Button from 'react-native-button';
import CreateUser from './Screens/NewUser';
import Dash from './Screens/Dash';
import Login from './Screens/Login';
import Calories from './Screens/DashScreens/Calories';
import Checkin from './Screens/DashScreens/Checkin';
import Sleeping from './Screens/DashScreens/Sleeping';
import Social from './Screens/DashScreens/Social';
import Stats from './Screens/DashScreens/Stats';
import Workout from './Screens/DashScreens/Workout';
import Inbox from './Screens/DashScreens/Inbox';
import Findgym from './Screens/DashScreens/Findgym';
import GymInfo from './Screens/DashScreens/GymInfo';
export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return ( < Appnavigation / >
    );
  }
}

const Appnavigation = StackNavigator({
  HomeScreen: {
    screen: Login
  },
  CreateUser: {
    screen: CreateUser
  },
  Dash: {
    screen: Dash
  },
  Sleeping: {
    screen: Sleeping
  },
  Calories: {
    screen: Calories
  },
  Workout: {
    screen: Workout
  },
  Stats: {
    screen: Stats
  },
  Social: {
    screen: Social
  },
  Checkin: {
    screen: Checkin
  },
  Inbox: {
    screen: Inbox
  },
  Findgym: {
    screen: Findgym
  },
  GymInfo: {
    screen: GymInfo
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});