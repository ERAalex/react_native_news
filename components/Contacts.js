import React, {useState} from 'react';
import { Text, View, Button } from 'react-native';
import { gStyle } from '../styles/style';


export default function Contacts({navigation}) {
  const loadScene = () => {
    navigation.navigate('Main');
  }


    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Contact page</Text>
        <Button title='Open Main page' onPress = {loadScene}/>

      </View>
    );
}

