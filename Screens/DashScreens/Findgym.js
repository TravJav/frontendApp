import store from 'react-native-simple-store';   //https://www.npmjs.com/package/react-native-simple-store
import React from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
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



import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
var Promise = require('bluebird');

import Button from 'react-native-button';

export default class Findgym extends React.Component {

    constructor() {
        super();


        this.state = {
            mapRegion: null,
            lastLat: null,
            lastLong: null,
          }
     
    }
    componentDidMount() {
        this.watchID = navigator.geolocation.watchPosition((position) => {
          // Create the object to update this.state.mapRegion through the onRegionChange function
          let region = {
            latitude:       position.coords.latitude,
            longitude:      position.coords.longitude,
            latitudeDelta:  0.00922*1.5,
            longitudeDelta: 0.00421*1.5
          }
          this.onRegionChange(region, region.latitude, region.longitude);
        });
      }

      componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
      }

      onRegionChange(region, lastLat, lastLong) {
        this.setState({
          mapRegion: region,
          // If there are no new values set the current ones
          lastLat: lastLat || this.state.lastLat,
          lastLong: lastLong || this.state.lastLong
        });
      }
    static navigationOptions = {
        title: 'Find A Gym',
    };
    render() {
    return (
      <View style={{flex: 1}}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}>
          <MapView.Marker
            coordinate={{
              latitude: (this.state.lastLat + 0.00050) || -36.82339,
              longitude: (this.state.lastLong + 0.00050) || -73.03569,
            }}>
            <View>
              <Text style={{color: '#000'}}>
                { this.state.lastLong } / { this.state.lastLat }
              </Text>
            </View>
          </MapView.Marker>
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });