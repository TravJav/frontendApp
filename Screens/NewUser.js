
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
  NavigatorIOS,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Button from 'react-native-button';
var t = require('tcomb-form-native');
import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

var Form = t.form.Form;
export default class CreateUser extends React.Component {

  constructor() {
    super();

    this.state = {
     email: '',
     password: '',
     username: ''
    }
    this.captureInfo = this.captureInfo.bind(this);
  }
// TODO perform password verification with repeat password
  captureInfo() {
    var value = this.refs.form.getValue();
    var convertedFormat = JSON.stringify(value)
   
    if (value) { // if validation fails, value will be null
      console.log("Checking "+value.email); // value here is an instance of Person
      console.log("Checking "+value.username);
      console.log("Checking "+value.email);
    fetch('http://192.168.1.2:3200/newUser', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // values go in here
        email: value.email,
        username: value.username,
        password: value.password

      })
    });
  }
}
  static navigationOptions = {
    title: 'Welcome!',
  };
  render() {
    return (
      <View style={styles.container}>
        <Form
          ref="form" // assign a ref
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={() => this.captureInfo()} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
// here we are: define your domain model
var Person = t.struct({
   email: t.String,
  username: t.String,
  password: t.String   // a boolean
});

var options = {
  fields: {

    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      password: true,
      secureTextEntry: true,
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
      label: 'Agree to Terms',
    },
  },
};

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

