import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons'; 

import Explore from './Screens/Explore';
import Trips from './Screens/Trips';
import Save from './Screens/Save';
import Inbox from './Screens/Inbox';
import Profile from './Screens/Profile'; 


export default createBottomTabNavigator({
  Explore:{
    screen : Explore, 
    navigationOptions: {
      tabBarLabel: 'EXPLORE', 
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-outline" color={tintColor} size={24} />
        )       
    }
  }
  , 
  Saved:{
    screen: Save,
    navigationOptions: {
      tabBarLabel: 'SAVED', 
      tabBarIcon:({tintColor})=>(
        <Icon name = "ios-heart-outline" color={tintColor} size={24} />
      )
    }
  }, 
  Trips:{
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS', 
      tabBarIcon:({tintColor})=>(
        <Image source={require('./assets/airbnb.png')} style={{ height: 24, width: 24, tintColor: tintColor }} />
      )
    }
  }, 
  Inbox:{
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'EXPLORE', 
      tabBarIcon:({tintColor})=>(
        <Icon name = "ios-chatboxes-outline" color={tintColor} size={24} />
      )
    }
  }, 
  Profile:{
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE', 
      tabBarIcon:({tintColor})=>(
        <Icon name = "ios-person-outline" color={tintColor} size={24} />
      )
    }
   }
}
, {
  tabBarOptions:{
    activeTintColor: 'red', 
    inactiveTintColor:'grey', 
    style:{
      backgroundColor:'white', 
      borderTopWidth: 0,
      shadowOffset:{
        width: 5, height: 3
      }, 
      shadowColor: 'black', 
      shadowOpacity: 0.5, 
      elevation: 5
      }
     } 
    }
  );
