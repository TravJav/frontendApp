import store from 'react-native-simple-store';   //https://www.npmjs.com/package/react-native-simple-store
import React from 'react';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
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

const MAP_KEY = "AIzaSyAdJxnlhQgWeZM6aAzsDhDIrHtd3CMQnDA";
const SideMenu = require('react-native-side-menu');
var Promise = require('bluebird');
import Button from 'react-native-button';

export default class Findgym extends React.Component {

    constructor() {
        super();
        this.state = {
            mapRegion: null,
            lastLat: null,
            lastLong: null,
            places: null,
            long: null,
            lat: null
           
        }
    }

   findGym(){
    const search = this.getUrWithParams(this.state.lastLat,this.state.lastLong, 2000, 'gym','gym', MAP_KEY)
    console.log(search)
    fetch(search)
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
      const arrayMarkers = [];
      res.results.map((element, i) => {
        arrayMarkers.push(
        <Marker
         key={i}
         coordinate={{
           latitude: element.geometry.location.lat,
           longitude: element.geometry.location.lng
         }}
        >
         <Callout>
           <View>
             <Text>{element.name}</Text>
            <Text> Rating:{element.rating}</Text>
            <Text> Hours: {element.open_now}</Text>
             </View>
             </Callout>
             </Marker>
        )
      })
      this.setState({places: arrayMarkers});
    })
   }
  

   getUrWithParams(lat, long, radius, type, name, API){
    const url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
    const location =  `location=${lat},${long}&radius=${radius}`;
    const typeData = `&types=${type}`;
    const typeName = `&name=${name}`;
    const key = `&key=${API}`;
    return `${url}${location}${typeData}${typeName}${key}`;
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
          setTimeout(() => {
           this.findGym(); // Find the gyms close to user
          }, 6000);
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
      
           {this.state.places}
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
