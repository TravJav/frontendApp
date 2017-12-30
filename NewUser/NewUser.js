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
  NavigatorIOS
} from 'react-native';
import Button from 'react-native-button';

export default class CreateUser extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }

    this.loginButton = this.login_user.bind(this);
  }
  // Login Http Request
  login_user() {
    fetch('http://192.168.1.6:3200/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      })
    });
  }

  render() {
    return (


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
          <Text style={styles.buttonContainer}> Create Account </Text>
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5E6D9A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputUser: {
    height: 30,
    width: 200,
    backgroundColor: '#AAABAE',
    marginTop: 35,
    fontWeight: '500',
    borderRadius: 25,
  },
  inputPass: {
    height: 30,
    width: 200,
    backgroundColor: '#AAABAE',
    marginTop: 35,
    borderRadius: 25,
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: '#55638B',
    width: 200,
    paddingHorizontal: 65,
    paddingBottom: 25,

  }/*,
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }*/

});
