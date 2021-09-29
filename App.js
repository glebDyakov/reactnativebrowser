import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import * as SQLite from 'expo-sqlite';

import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { WebView } from 'react-native-webview';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainActivity" component={ MainActivity } />
        <Stack.Screen name="SettingsActivity" component={ SettingsActivity } />
        <Stack.Screen name="BookmarksActivity" component={ BookmarksActivity } />
        <Stack.Screen name="TabsActivity" component={ TabsActivity } />
        <Stack.Screen name="HistoryActivity" component={ HistoryActivity } />
        <Stack.Screen name="DownloadsActivity" component={ DownloadsActivity } />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

export function SettingsActivity({  }){
  return (
    <View>
      <Text>settings</Text>
    </View>
  )  
}

export function DownloadsActivity({  }){
  return (
    <View>downloads</View>
  )  
}

export function BookmarksActivity({  }){
  return (
    <View>
      <Text>bookmarks</Text>
    </View>
  )  
}

export function HistoryActivity({  }){
  return (
    <View>
      <Text>history</Text>
    </View>
  )  
}

export function TabsActivity({  }){
  return (
    <View>
      <Text>tabs</Text>
    </View>
  )  
}

export function MainActivity({ navigation }) {
  
  const db = SQLite.openDatabase('browserdata.db')
  
  const [ burgerMenu, setBurgerMenu ] = React.useState(false)

  const [ findingWindow, setFindingWindow ] = React.useState(false)

  const [ keywords, setKeywords ] = React.useState('')

  return (
    <TouchableOpacity onPress={() => setBurgerMenu(false) }>
      <View style={{ width: '100%' }}>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
          <TouchableOpacity onPress={() => {
            db.transaction(transaction => {
              let sqlStatement = "INSERT INTO \"smartcards\"(cardname, barcode, cardtype) VALUES (\"" + smartCardName.getText().toString() + "\", \"" + barCode.getText().toString() + "\", \"" + cardType + "\");"
              transaction.executeSql(sqlStatement, null, (tx, receivedPasswords) => {
                console.log("добавлена закладка")
              })
            })
          }}>
            <AntDesign name="star" size={24} color="black" />
          </TouchableOpacity>
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
          <TouchableOpacity style={{  }} onPress={() => {
            console.log(`обновить`)
            window.location.reload()
          }}>
            <Ionicons name="reload" size={24} color="black" />
          </TouchableOpacity>
        </View>
        
        <View style={{ width: "100%", height: 275 }}>
          <WebView 
            style={{ width: "100%", height: 275 }}
            source={{ html: '<p>asd</p>' }}
          />
        </View>

        <View style={{ width: '100%', display: 'flex', justifyContent: 'space-around', flexDirection: 'row' }}> 
          <Text>qwe</Text>
          <WebView 
            style={ styles.container }
            originWhitelist={['*']}
            source={{ html: '<p>asd</p>' }}
          />
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
            console.log(`показать закладки`)
            navigation.navigate("BookmarksActivity")
          }}>
            <AntDesign name="star" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(`на список вкладок`)
            navigation.navigate("TabsActivity")
          }}>
            <Feather name="copy" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            console.log(`в меню`)
            setBurgerMenu(true)
          }}>
            <Feather name="menu" size={24} color="black" />
          </TouchableOpacity>
        </View>
        
        {
          burgerMenu ?
            <View style={{ borderRadius: 15, position: "absolute", top: "calc(100% - 175px)", left: 0, width: "100%", height: 400, backgroundColor: 'rgb(255, 255, 255)', borderWidth: 1, borderColor: "rgb(175, 175, 175)" }}>
              <View style={{ marginVertical: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <View ew style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("загрузки")
                    navigation.navigate("DownloadsActivity")
                  }}>
                    <Feather name="download" size={24} color="black" />
                    <Text>Загрузки</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Журнал")
                    navigation.navigate("HistoryActivity")
                  }}>
                    <MaterialCommunityIcons name="history" size={24} color="black" />
                    <Text>Журнал</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Сохранённые страницы")
                  }}>
                    <MaterialCommunityIcons name="web" size={24} color="black" />
                    <Text>Сохранённые страницы</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Добавить страницу")
                  }}>
                    <AntDesign name="plus" size={24} color="black" />
                    <Text>Добавить страницу</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginVertical: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Поделиться")
                  }}>
                    <Ionicons name="ios-share-social-outline" size={24} color="black" />
                    <Text>Поделиться</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Режим затемнения")
                  }}>
                    <Ionicons name="moon-outline" size={24} color="black" />
                    <Text>Режим затемнения</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Блокир. рекламы")
                  }}>
                    <Entypo name="block" size={24} color="black" />
                    <Text>Блокир. рекламы</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Найти на странице")
                    setFindingWindow(true)
                  }}>
                    <MaterialCommunityIcons name="file-find-outline" size={24} color="black" />
                    <Text>Найти на странице</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ marginVertical: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Версия для ПК")
                  }}>
                    <MaterialIcons name="personal-video" size={24} color="black" />
                    <Text>Версия для ПК</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Размер шрифта")
                  }}>
                    <Octicons name="text-size" size={24} color="black" />
                    <Text>Размер шрифта</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Дополнения")
                  }}>
                    <MaterialIcons name="extension" size={24} color="black" />
                    <Text>Дополнения</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <TouchableOpacity onPress={() => {
                    console.log("Печать/PDF")
                  }}>
                    <Ionicons name="print-outline" size={24} color="black" />
                    <Text>Печать/PDF</Text>
                  </TouchableOpacity>
                </View>
              </View>
              

                <View style={{ marginVertical: 25, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignSelf: 'center', textAlign: 'center' }}>
                    <TouchableOpacity onPress={() => {
                      console.log("Настройки")
                      navigation.navigate("SettingsActivity")
                    }}>
                      <Ionicons name="settings-outline" size={24} color="black" />
                      <Text>Настройки</Text>
                    </TouchableOpacity>
                  </View>
                  <View>

                  </View>
                  <View>

                  </View>
                  <View>
                    
                  </View>
                </View>
              </View>
            :
              <Text></Text>
        }
        
        {
          findingWindow ?
            <>
              <View style={{ position: 'fixed', top: 175, left: "calc(100% - 225px)", width: 225, height: 35, backgroundColor: "rgb(255, 255, 255)" }}>
                <TextInput />
              </View>

              <View style={{ display: 'flex', justifyContent: 'center', borderRadius: 250, alignItems: 'center', position: 'fixed', top: 250, left: "calc(100% - 75px)", width: 35, height: 35, backgroundColor: "rgb(255, 255, 255)" }}>
                <TouchableOpacity onPress={() => {
                  console.log("переходим к поиску выше")
                }}>
                  <AntDesign name="up" size={24} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{ display: 'flex', justifyContent: 'center', borderRadius: 250, alignItems: 'center', position: 'fixed', top: 325, left: "calc(100% - 75px)", width: 35, height: 35, backgroundColor: "rgb(255, 255, 255)" }}>
                <TouchableOpacity onPress={() => {
                  console.log("переходим к поиску ниже")
                }}>
                  <AntDesign name="down" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </>
          :
            <Text></Text>
        }

        

      </View>
    </TouchableOpacity>
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
