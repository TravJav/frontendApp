

import store from 'react-native-simple-store';
import React from 'react';
import Dash from './Dash'
import obtainToken from '../Actions/obtainToken';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
    AppRegistry,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
var Promise = require('bluebird');

import Button from 'react-native-button';
import CreateUser from './NewUser';
import App from '../App';


export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            data: '',
            token: ''
        }
        this.loginButton = this.login_user.bind(this);
        this.userDashboard = this.userDashboard.bind(this);
    }

    userDashboard(json) { // Take user to their dash is everything checks out
        store.save('serverToken', {
            authorization: this.state.token
        })
      
        this.props.navigation.navigate('Dash');
    }

    login_user() {
        if (this.state.email == ' ' || this.state.password == ' ') {
            alert("You Have Not Entered Any Info!");
        } 
        fetch('http://192.168.1.2:3200/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })

        }).then(response => response.json())
            .then(response => {
                let Token = response.token;
                this.setState({ token: Token })
                this.userDashboard();
            }).catch((error) => {
                this.props.navigation.navigate('Login')
                
            })
    }

    static navigationOptions = {
        title: 'Existing User',
    };
    render() {
        return (
            <ImageBackground
                style={{ flex: 1 }}
                source={require('../public/cover.jpg')}>
                <View style={styles.container}>
                    <TextInput style={styles.inputUser}
                        placeholder=" Email"
                        onChangeText={(text) => {
                            this.setState({ email: text });
                        }} />

                    <TextInput style={styles.inputPass}
                        placeholder=" Password"
                        secureTextEntry
                        onChangeText={(text) => {
                            this.setState({ password: text });
                        }} />

                    <Button
                        style={styles.buttonContainer}
                        onPress={() => this.loginButton()}>
                        <Text style={styles.buttonContainer}>Login</Text>
                    </Button>
                    <Button
                        style={styles.newUserButton}
                        onPress={() => this.props.navigation.navigate('CreateUser')}>
                        <Text style={styles.newUserButton}>New Users</Text>
                    </Button>

                </View>
            </ImageBackground>

        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputUser: {
        height: 40,
        width: 250,
        backgroundColor: '#AAABAE',
        marginTop: 35,
        fontWeight: '500',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputPass: {
        height: 40,
        width: 250,
        backgroundColor: '#AAABAE',
        marginTop: 35,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        width: 200,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#FC3C25',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        textAlign: 'center', // <-- the magic
    },
    newUserButton: {
        width: 200,
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#FC3C25',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        textAlign: 'center', // <-- the magic

    }
});
