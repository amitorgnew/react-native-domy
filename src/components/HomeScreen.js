import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
   const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
     <View style={{margin: 50}}/>
      <Button
        onPress={() => navigate('Chat', { user: 'Lucy' })}
        title="Contacts"
      />
     <View style={{margin: 7}}/>
      <Button
        onPress={() => navigate('ChatHis')}
        title="All Contact & My profile"
      />
      <View style={{margin: 7}}/>
       <Button
         onPress={() => navigate('AddList')}
         title="Add Contact"
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 60,
  }
});
export default HomeScreen;
