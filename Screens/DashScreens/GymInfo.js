
import React from 'react';
import FindGym from './Findgym';
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

const SideMenu = require('react-native-side-menu');
var Promise = require('bluebird');
import Button from 'react-native-button';

export default class GymInfo extends React.Component {

    constructor(props) {
        super(props);

      this.state = {
    
      }
   this.locations = this.loctions.bind(this);
    }

    locations(){

   <FindGym gyms= {this.props.places}/>
   console.log(gyms.element.name + gyms.element.rating)

    }
    componentDidMount() {
      

        
      }


    static navigationOptions = {
        title: 'Gym Info',
    };

    render() {
      return (
     
  <View style={styles.container}>
   
   <Button
           onPress={() => t} >
           <Text style={styles.newUserButton}> Gym info </Text>
       </Button>
  

    </View>
      );
    }
  }
  const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    /*,

    contentPane: {

    },

    googleImage : {
        
    },

    rating: {

    },

    description: {

    }
*/

});