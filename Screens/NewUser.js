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
var Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

export default class CreateUser extends React.Component {

  constructor() {
    super();
    this.captureInfo = this.captureInfo.bind(this);
  }

  captureInfo() {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    alert(value);
  }
  static navigationOptions = {
    title: 'Welcome!',
  };
  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c} // assign a ref
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
  password: t.String,
  RepeatPassword: t.String,     // a required number
  rememberMe: t.Boolean,
  terms: t.Boolean,       // a boolean
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