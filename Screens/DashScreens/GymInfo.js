import store from 'react-native-simple-store';   //https://www.npmjs.com/package/react-native-simple-store
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { CreateStore, applyMiddleware } from 'redux';
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

const MAP_KEY = "AIzaSyAdJxnlhQgWeZM6aAzsDhDIrHtd3CMQnDA";
const SideMenu = require('react-native-side-menu');
var Promise = require('bluebird');
import Button from 'react-native-button';

export default class GymInfo extends React.Component {

    constructor() {
        super();
   
    }

    componentDidMount() {
      
      }

  

    static navigationOptions = {
        title: 'Gym Info',
    };

    render() {
      return (
     
        <View style={styles.container}>
   


   

    </View>
      );
    }
  }
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});