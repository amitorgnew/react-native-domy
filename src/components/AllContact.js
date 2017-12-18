import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class AllContact extends React.Component {

  render() {
    return (
        <MapView
  provider={ PROVIDER_GOOGLE }
  style={ styles.container }
  //showsUserLocation={ true }
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
</MapView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
});

export default AllContact;
