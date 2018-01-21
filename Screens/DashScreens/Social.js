import store from 'react-native-simple-store';   //https://www.npmjs.com/package/react-native-simple-store
import React from 'react';

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
var Promise = require('bluebird');

import Button from 'react-native-button';




export default class Social extends React.Component {
    constructor() {
        super();

        this.state = {
            token: ''
        }

        this.test = this.test.bind(this);
    }

  
    static navigationOptions = {
        title: 'Social',
    };
    render() {
        return (
  
            <View style={styles.container}>
     <Text> Im on caloiries screen </Text>

            </View>
         

        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
