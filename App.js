import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading'
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import MainStack from './naviagate'

// подключаем асинхронно шрифты которые взяли из гугл
const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
});


export default function App() {

  const [font, setFont] = useState(false)

  if(font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() =>  setFont(true)}
        onError={(error)=> console.warn(error)}
      />
    );
  }
}

// дать разрешение на измненние папки и проекта  sudo chown -R <user-name> <directory-name></directory-name>