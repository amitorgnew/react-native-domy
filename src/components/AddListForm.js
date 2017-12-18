import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import t from 'tcomb-form-native';
import { onAdd, onEdit } from '../actions/action';
import { connect } from 'react-redux';

const Form = t.form.Form;

var options = {
  auto: 'placeholders'
};

const User = t.struct({
  name: t.String,
  email: t.String,
  phone: t.Number,
  work: t.String,
  city: t.String,
});

class AddList extends React.Component {
  static navigationOptions = {
    title: 'Contact Form',
  };

  constructor(props) {
    super(props);
    let data = {};
    let id = 0;
    const {params} = this.props.navigation.state;
    if(params){
    id = params.id;
    this.props.datalist.data.map((user) => {
      if (parseInt(params.id, 10) === user.id) {
        data = { ...user };
      }
      return data;
    });
    }
    this.state = {
        value: data,
        id: id,
    }
  }
  onPress(){
  // call getValue() to get the values of the form
  //const { navigate } = this.props.navigation;
  var value = this.refs.form.getValue()  ;
  if (value) { // if validation fails, value will be null

  const valuereal = { ...value };
  if(this.state.id != 0){
     valuereal.id = this.state.id;
  }
  if(valuereal.id){
  this.props.onEdit(valuereal);
  }else{
  valuereal.id = this.props.datalist.nextId;
  this.props.onAdd(valuereal);
  }
  }
  this.props.navigation.goBack(null);
 }
 onChange(value) {
  this.setState({ value});
 }
handleData(){
    let data = {};
    this.props.datalist.data.map((user) => {
      if (parseInt(this.props.navigation.state.id, 10) === user.id) {
        data = { ...user };
      }
      return data;
    });
    return data;
  }
  render() {
    //const { params } = this.props.navigation.state;
    /*var value = {};
    if(params){
      this.props.datalist.data.map((user) => {
        if (parseInt(params.id, 10) === user.id) {
          value = { ...user };
          //this.setState({value});
        }
      });
        //var value = this.handleData.bind(this);
    }else{
        value = {}
    }*/
    return (
      <ScrollView style={styles.container}>
          <Form ref="form" type={User} value={this.state.value}
           onChange={this.onChange.bind(this)}
           />
          <View style={{margin: 7}}/>
            <Button
              title="Save"
              onPress={this.onPress.bind(this)}
              accessibilityLabel="Learn more about this purple button"
            />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    marginTop: 30,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  /*button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }*/
});

const mapDispatchToProps = dispatch => ({
  onAdd: (values) => {
    dispatch(onAdd(values));
  },
  onEdit: (values) => {
    dispatch(onEdit(values));
  }
});

const mapStateToProps = state => ({
  datalist: state.appreducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(AddList);
