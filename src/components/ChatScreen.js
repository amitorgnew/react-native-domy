import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import CardView from 'react-native-cardview'
import onDelete, { onImportant } from '../actions/action';

/*import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';*/

class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Contacts',
  });

  onDelete1(i) {
    Alert.alert(
      'Delete',
      'Would you like to delete?',
      [
        {text: 'Cancel', onPress: () => {}},
        {text: 'OK', onPress: () => this.props.onDelete(i)},
      ],
      { cancelable: false }
    )
  }
  render() {

      const { navigate } = this.props.navigation;
    //const { params } = this.props.navigation.state;
    return (
          <ScrollView>
          {this.props.datalist.data.map((app, i) => (

              <CardView
                          key={app.id}
                          cardElevation={2}
                          cardMaxElevation={2}
                          cornerRadius={5}
                          style={styles.container}
                          >

                            <Text style={styles.title}>
                                {app.name}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Image  source={require('../assets/005-old-cellphone.png')} />{app.phone}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Image  source={require('../assets/notepad.png')} />{app.email}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Image  source={require('../assets/003-pen-point.png')} />{app.work}
                            </Text>
                            <Text style={styles.subtitle}>
                                <Image  source={require('../assets/004-pin.png')} />{app.city}
                            </Text>
                          <View style={{margin: 7}}/>
                            <Button
                              onPress={() => this.onDelete1(i)}
                              title="Delete"
                              accessibilityLabel="Learn more about this purple button"
                            />
                          <View style={{margin: 7}}/>
                          <Button
                            onPress={() => navigate('AddList', { id: app.id})}
                            title="Edit"
                            accessibilityLabel="Learn more about this purple button"
                          />

              </CardView>
          ))}
          </ScrollView>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onDelete: (index) => {
    dispatch(onDelete(index));
  },
  onImportant: (index) => {
    dispatch(onImportant(index));
  },
});

const mapStateToProps = state => ({
  datalist: state.appreducer,
});

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    backgroundColor: 'transparent',
    color:'black',
    textAlign:'center',
    borderStyle:'solid',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  },
  subtitle: {
    fontSize: 15,
    backgroundColor: 'transparent',
    color:'black',
    marginLeft: 15,
    marginTop:10,
    //textAlign:'center'
  },
  button: {
    marginRight: 10
  },
  container:{
    minHeight:250,
    borderStyle:'solid',
    borderWidth: 3,
    borderColor: 'black',
    padding: 20,
    textAlign:'center',
  },
  icon:{
    marginRight:10,
  },
  buttonSpace:{
     marginBottom:20,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatScreen);
