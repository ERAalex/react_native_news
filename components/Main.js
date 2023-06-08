import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import { gStyle } from '../styles/style';


export default function Main({ navigation }) {
  const loadScene = () => {
    navigation.navigate('Contacts');
  }

    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Main page</Text>
        <Button title='Open page' onPress = {loadScene}/>
      </View>
    );
}

