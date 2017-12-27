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

} from 'react-native';

import Button from 'react-native-button';


export default class App extends React.Component {

  constructor() {
    super();


    this.state = {
      email: '',
      password: ''
    }


    this.loginButton = this.login_user.bind(this);
  }
  // perfom POST reuest here
  login_user() {

    fetch("/echo/json/",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ id: this.email, password: this.password })
      })
      .then(function (res) {
        alert("Submission successfuk");

        // load other view
      })
      .catch(function (res) {
        alert(" Please Check Your Network Connection");
      })
      
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
          <Text style={styles.buttonContainer}> Login </Text>
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
    marginTop: 10,
    backgroundColor: '#55638B',
    width: 200,
    paddingHorizontal: 65,
    paddingBottom: 25,
    borderRadius: 25
  },

});
