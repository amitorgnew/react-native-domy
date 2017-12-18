import React from 'react';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from '../components/HomeScreen';
import ChatScreen from '../components/ChatScreen';
import RecentChat from '../components/RecentChat';
import AllContact from '../components/AllContact';
import AddList from '../components/AddListForm';

export const MainScreenNavigator = TabNavigator({
  Contacts: { screen: ChatScreen },
  Profile: { screen: RecentChat },
  MyLoc: { screen: AllContact },
  AddForm: { screen: RecentChat },

});

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  ChatHis:{screen: MainScreenNavigator,
    navigationOptions: {
    title: 'All Contacts And My Profile',},
  },
  AddList: {
    screen: AddList },

});

export default AppNavigator;
