

import store from 'react-native-simple-store'; //https://www.npmjs.com/package/react-native-simple-store
import React from 'react';
import Login from './Login';
import {
    CreateStore,
    applyMiddleware
} from 'redux';
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
    constructor(props) {
        super();

        this.state = {
            token: ''
        }
        /*
        this.calScreen = this.calScreen.bind(this);
        this.checkScreen = this.checkScreen.bind(this);
        this.inboxScreen = this.inboxScreen.bind(this);
        this.sleepScreen = this.sleepScreen.bind(this);
        this.socialScreen = this.socialScreen.bind(this);
        this.statsScreen = this.statsScreen.bind(this);
        this.workoutScreen = this.workoutScreen.bind(this); */
    }

    componentDidMount() {
        // Get updated object
        store.get('serverToken')
            .then((res) =>
                this.setState({
                    token: 'travis haycock'
                })
                // console.log(res.authorization) // 'Blurry Face'

            )
    }
/*
calScreen(){
    this.props.navigation.navigate('Login')
    
}

checkScreen(){
    this.props.navigation.navigate('Login')
}

inboxScreen(){
    this.props.navigation.navigate('Login')
}

sleepScreen(){
    this.props.navigation.navigate('Login')
}

socialScreen(){
    this.props.navigation.navigate('Login')
}

statsScreen(){
    this.props.navigation.navigate('Login')
}

workoutScreen(){
    this.props.navigation.navigate('Login')

}

*/
    static navigationOptions = {
        title: 'Users Dashboard',
    };
    render() {
        return ( 
        
        
        
            <View style={styles.container}>
              <Button
  style={styles.buttonContainer}
  onPress={() =>this.props.navigation.navigate('Findgym')}>
  <Text style={styles.buttonContainer}> Find Gym </Text>
</Button>
            <Button
            style={styles.buttonContainer}
            onPress={() =>this.props.navigation.navigate('Calories')}>
            <Text style={styles.buttonContainer}>Calories</Text>
        </Button>
  <Button
  style={styles.buttonContainer}
  onPress={() => this.props.navigation.navigate('Checkin')}>
  <Text style={styles.buttonContainer}>Checkin</Text>
</Button>
  <Button
  style={styles.buttonContainer}
  onPress={() =>this.props.navigation.navigate('Inbox')}>
  <Text style={styles.buttonContainer}> Inbox</Text>
</Button>
  <Button
  style={styles.buttonContainer}
  onPress={() => this.props.navigation.navigate('Sleeping')}>
  <Text style={styles.buttonContainer}>Sleeping</Text>
</Button>
  <Button
  style={styles.buttonContainer}
  onPress={() => this.props.navigation.navigate('Social')}>
  <Text style={styles.buttonContainer}>Social</Text>
</Button>
  <Button
  style={styles.buttonContainer}
  onPress={() =>this.props.navigation.navigate('Stats')}>
  <Text style={styles.buttonContainer}> Stats </Text>
</Button>
</View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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

