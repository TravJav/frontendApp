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



import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';

import Button from 'react-native-button';
import CreateUser from './NewUser/NewUser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }

    this.loginButton = this.login_user.bind(this);
    this.createUser = this.createUser.bind(this);
  }


  // Login Http Request
  login_user() {
    fetch('http://IPADDY/login', {
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


  createUser() {
  
  }



  render() {
    return (
      <ImageBackground
          style={{flex: 1}}
          source={require('./public/cover.jpg')}>
          
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


        <Button
          style={styles.newUserButton}
          onPress={() => this.createUser()}>
          <Text style={styles.newUserButton}> New User ?</Text>
        </Button>
  </View>




        </ImageBackground>


    );
  }
}
const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#5E6D9A',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  
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
  },
  newUserButton: {
    marginTop: 30,
    backgroundColor: '#55638B',
    width: 200,
    paddingHorizontal: 65,
    paddingBottom: 25,
  }
});



/*
<Image
  style={{
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }}
  source={require('./public/cover.jpg')}
  resizeMode="stretch"

/>
*/