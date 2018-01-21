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
import {DrawerNavigator} from 'react-navigation';


import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
var Promise = require('bluebird');

import Button from 'react-native-button';

export default class Stats extends React.Component {
    constructor() {
        super();

        this.state = {
            token: ''
        }

        this.test = this.test.bind(this);
    }

    componentDidMount() {
        // Get updated object
        store.get('serverToken')
            .then((res) =>
                this.setState({ token: 'travis haycock' })
            // console.log(res.authorization) // 'Blurry Face'

            )
        this.test();
    }
    


    test() {
        alert("---------" + this.state.token)
    }

    static navigationOptions = {
        title: 'Users Dashboard',
    };
    render() {
        return (
            <AppDrawerNavigator />
         

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
