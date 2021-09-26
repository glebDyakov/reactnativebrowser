import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export default function MainActivity() {
  
  const [ keywords, setKeywords ] = React.useState('')

  return (
    <View style={{ width: '100%' }}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
        <TextInput value={ keywords } style={{ borderRadius: 15, backgroundColor: 'rgb(215, 215, 215)', height: 35, width: '75%' }} onChangeText={(newKeywords) => {
          setKeywords(newKeywords)
        }} />
        <TouchableOpacity style={{  }} onPress={() => {
          console.log(`искать`)
          // window.open(`https://yandex.ru/`)
          if((keywords.includes(".ru") || keywords.includes(".com")) && (keywords.includes("http") || keywords.includes("https"))){
            window.open(`${keywords}`)
          } else {
            window.open(`https://yandex.ru/search/?lr=10765&text=${keywords}`)
          }
          
        }}>
          <EvilIcons name="search" size={ 32 } color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexDirection: 'row', position: 'fixed', top: 'calc(100% - 25px)', left: 0 }}>
        <TouchableOpacity onPress={() => {
          console.log(`на вкладку назад`)
        }}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(`на вкладку вперед`)
        }}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(`на домашнюю страницу`)
        }}>
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(`добавить в закладки`)
        }}>
          <AntDesign name="star" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(`на список вкладок`)
        }}>
          <MaterialCommunityIcons name="layers-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          console.log(`в меню`)
        }}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
