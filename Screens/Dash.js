import {connect} from 'react-redux';
import React from 'react';
import Login from './Login';
import{CreateStore, applyMiddleware} from 'redux';
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
import CreateUser from './NewUser';
import App from '../App';

export default class Dash extends React.Component {
constructor(){
    super(props);

    this.state = {
    token: this.props.children.t
    }
}


static navigationOptions = {
    title: 'Welcome! Travis',
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
function mapStateToProps(state){
    return {
      
    }
    }
