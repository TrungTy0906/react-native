import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import HomeScreen from './components/reviews/home';
import DetailScreen from './components/reviews/detail';
import AboutScreen from './components/reviews/about';


import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import {useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigation from './components/navigation/app.navigation';


SplashScreen.preventAutoHideAsync();


export default function App() {
  const [loaded, error] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });
 
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
 
  if (!loaded && !error) {
    return null;
  }



  return(
    // <View>
    //   <HomeScreen/>
    //   <DetailScreen/>
    //   <AboutScreen/>
    // </View>
    <NavigationContainer>
        <AppNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
