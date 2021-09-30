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
import { Fontisto } from '@expo/vector-icons'; 

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import { WebView } from 'react-native-webview';

export default function App() {
  const Stack = createStackNavigator();

  const testActivity = "DownloadsActivity"

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ testActivity }>
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
    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ marginVertical: 15, width: "85%", height: 75, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "rgb(255, 255, 255)", borderRadius: 15 }}>
        <TouchableOpacity onPress={() => {
          console.log("выбор поисковой системы")
        }}>
          <Text>Поисковая система</Text>
        </TouchableOpacity>
      </View>
    </View>
  )  
}

export function DownloadsActivity({  }){
  
  const [ downloads, setDownloads ] = React.useState([
    {
      url: "https://google.com",
      title: "Google",
      size: 2054
    },
    {
      url: "https://yandex.ru",
      title: "Yandex",
      size: 1024
    },
  ])

  return (
    <View style={{ width: '100%' }}>
      <View style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ display: 'flex', flexDirection: 'row', width: 175, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {
            console.log("назад")
            navigation.navigate("MainActivity")
          }}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18 }}>
            Загрузки
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', width: 125, alignItems: 'center', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {
            console.log("Поделиться")
          }}>
            <Ionicons name="ios-share-social-outline" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity style={{  }} onPress={() => {
            console.log(`искать`)
          }}>
            <EvilIcons name="search" size={ 32 } color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {
            console.log("открываю дополнительное окно")
          }}>
            <Text>⋮</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {
          downloads.length >= 1 ?
            downloads.map(download => {
              return (
                <View style={{ height: 75, marginVertical: 15, backgroundColor: "rgb(255, 255, 255)", width: '85%', borderRadius: 15 }}>
                  <View style={{ width: "100%", height: "100%", display: 'flex', flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
                    <AntDesign name="left" size={24} color="black" />
                    <View>
                      <Text>{ download.title }</Text>
                      <Text>{ download.url }</Text>
                    </View>
                    <Text>{ download.size } КБ</Text>
                  </View>
                </View>
              )
            })
          :
            <Text>Нет загрузок.</Text>
        }

      </View>
    </View>
  )  
}

export function BookmarksActivity({  }){
  
  const [ bookmarks, setBookmarks ] = React.useState([
    {
      title: 'Yandex',
      url: 'https://yandex.ru'
    },
    {
      title: 'Google',
      url: 'https://google.com'
    },
  ])
  
  return (
    <View>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ display: 'flex', flexDirection: 'row', width: 175, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {
            console.log("назад")
            navigation.navigate("MainActivity")
          }}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18 }}>
            Закладки
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', width: 125, alignItems: 'center', justifyContent: 'space-around' }}>
          
          <TouchableOpacity onPress={() => {
            console.log("Поделиться")
          }}>
            <Ionicons name="ios-share-social-outline" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity style={{  }} onPress={() => {
            console.log(`искать`)
          }}>
            <EvilIcons name="search" size={ 32 } color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {
            console.log("открываю дополнительное окно")
            setContextMenuEnabled(true)
          }}>
            <Text>⋮</Text>
          </TouchableOpacity>
        
        </View>
      </View>

      <View style={{ backgroundColor: 'rgb(255, 255, 255)', width: "100%", borderRadius: 15, marginVertical: 15, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: "90%" }}>
        
        {
          bookmarks.length >= 1 ?
            bookmarks.map(bookmark => {
              return (
                <View style={{ marginVertical: 15, display: 'flex', flexDirection: 'row', alignItems: 'space-around', justifyContent: 'space-around', width: "100%" }}>
                  <Fontisto name="yandex" size={24} color="black" />
                  <View style={{ width: '75%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 45 }}>
                    <Text>{ bookmark.title }</Text>
                    <View style={{ borderBottomColor: 'rgb(0, 0, 0)', borderBottomWidth: StyleSheet.hairlineWidth, }}>
                    </View>
                  </View>
                </View>
              )
            })
          :
          <Text style={{ marginVertical: 35 }}>Закладок нет</Text>
        }
        
      </View>
    </View>
  )  
}

export function HistoryActivity({  }){

  const [ historyRecords, setHistoryRecords ] = React.useState([
    {
      today: true,
      yesterday: true,
      lastWeek: false,
      lastMonth: true,
      title: "Yandex",
      url: 'https://yandex.ru',
      
    },
    {
      today: true,
      yesterday: true,
      lastWeek: true,
      lastMonth: false,
      title: "Google",
      url: 'https://google.com'
    },
    {
      today: false,
      yesterday: true,
      lastWeek: true,
      lastMonth: true,
      title: "Microsoft",
      url: 'https://microsoft.com'
    },
  ])

  const [ todayHistoryList, setTodayHistoryList ] = React.useState(false)
  const [ yestedayHistoryList, setYestedayHistoryList ] = React.useState(false)
  const [ lastWeekHistoryList, setLastWeekHistoryList ] = React.useState(false)
  const [ lastMonthHistoryList, setLastMonthHistoryList ] = React.useState(false)

  return (
    <View>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ display: 'flex', flexDirection: 'row', width: 175, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => {
            console.log("назад")
            navigation.navigate("MainActivity")
          }}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18 }}>
            Журнал
          </Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', width: 125, alignItems: 'center', justifyContent: 'space-around' }}>
          
          <TouchableOpacity onPress={() => {
            console.log("Поделиться")
          }}>
            <Ionicons name="ios-share-social-outline" size={24} color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity style={{  }} onPress={() => {
            console.log(`искать`)
          }}>
            <EvilIcons name="search" size={ 32 } color="black" />
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => {
            console.log("открываю дополнительное окно")
            setContextMenuEnabled(true)
          }}>
            <Text>⋮</Text>
          </TouchableOpacity>
        
        </View>
      </View>

      <View>
        
        <View style={{  }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => {
            console.log("раскрываю/сворачиваю список")
            setTodayHistoryList(!todayHistoryList)
          }}>
            <Text style={{ marginLeft: 35, fontWeight: 700 }}>Сегодня</Text>
            {
              todayHistoryList ?
                <AntDesign name="up" size={24} color="black" />
              :
                <AntDesign name="down" size={24} color="black" />
            }
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
            {
              todayHistoryList ?
                historyRecords.map(historyRecord => {
                  if(historyRecord.today) {
                    return (
                      <View style={{ display: 'flex', width: '100%' }}>
                        <Text>
                          { historyRecord.title }
                        </Text>
                        <Text>
                          { historyRecord.url }
                        </Text>
                      </View>
                    )
                  }
                  return <Text></Text>
                })
              :
                <Text></Text>
            }
          </View>
        </View>

        <View style={{  }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => {
            console.log("раскрываю/сворачиваю список")
            setYestedayHistoryList(!yestedayHistoryList)
          }}>
            <Text style={{ marginLeft: 35, fontWeight: 700 }}>Вчера</Text>
            {
              yestedayHistoryList ?
                <AntDesign name="up" size={24} color="black" />
              :
                <AntDesign name="down" size={24} color="black" />
            }
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
            {
              yestedayHistoryList ?
                historyRecords.map(historyRecord => {
                  if(historyRecord.yesterday) {
                    return (
                      <View style={{ display: 'flex', width: '100%' }}>
                        <Text>
                          { historyRecord.title }
                        </Text>
                        <Text>
                          { historyRecord.url }
                        </Text>
                      </View>
                    )
                  }
                  return <Text></Text>
                })
              :
                <Text></Text>
            }
          </View>
        </View>

        <View style={{  }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => {
            console.log("раскрываю/сворачиваю список")
            setLastWeekHistoryList(!lastWeekHistoryList)
          }}>
            <Text style={{ marginLeft: 35, fontWeight: 700 }}>За последние 7 дней</Text>
            {
              lastWeekHistoryList ?
                <AntDesign name="up" size={24} color="black" />
              :
                <AntDesign name="down" size={24} color="black" />
            }
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
            {
              lastWeekHistoryList ?
                historyRecords.map(historyRecord => {
                  if(historyRecord.lastWeek) {
                    return (
                      <View style={{ display: 'flex', width: '100%' }}>
                        <Text>
                          { historyRecord.title }
                        </Text>
                        <Text>
                          { historyRecord.url }
                        </Text>
                      </View>
                    )
                  }
                  return <Text></Text>
                })
              :
                <Text></Text>
            }
          </View>
        </View>

        <View style={{  }}>
          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} onPress={() => {
            console.log("раскрываю/сворачиваю список")
            setLastMonthHistoryList(!lastMonthHistoryList)
          }}>
            <Text style={{ marginLeft: 35, fontWeight: 700 }}>За последний месяц</Text>
            {
              lastMonthHistoryList ?
                <AntDesign name="up" size={24} color="black" />
              :
                <AntDesign name="down" size={24} color="black" />
            }
          </TouchableOpacity>
          <View style={{ width: '100%' }}>
            {
              lastMonthHistoryList ?
                historyRecords.map(historyRecord => {
                  if(historyRecord.lastMonth) {
                    return (
                      <View style={{ display: 'flex', width: '100%' }}>
                        <Text>
                          { historyRecord.title }
                        </Text>
                        <Text>
                          { historyRecord.url }
                        </Text>
                      </View>
                    )
                  }
                  return <Text></Text>
                })
              :
                <Text></Text>
            }
          </View>
        </View>

      </View>

    </View>
  )  
}

export function TabsActivity({  }){
  
  const [ tabs, setTabs ] = React.useState([
    {
      tabName: 'yandex'
    }
  ])
  
  return (
    <View style={{ display: 'block', width: "100%" }}>
      {
        tabs.length >= 1 ?
          tabs.map(tab => {
            return (
              <TouchableOpacity style={{ float: 'left', width: 175, height: 175, backgroundColor: "rgb(250, 250, 250)", borderRadius: 15, margin: 15 }} onPress={() => {
                console.log("Переходим к вкладке")
              }}>
                <View>
                </View>
              </TouchableOpacity>
            )
          })
        :
          <View style={{ width: '100%' }}>
            <Text style={{ textAlign: 'center' }}>Вкладок нет</Text>
          </View>
      }
      <View style={{ clear: 'both' }}></View>
      
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: "fixed", top: "calc(100% - 50px)", width: "100%", height: 50, backgroundColor: "rgb(75, 75, 75)" }}>
        <TouchableOpacity onPress={() => {
          console.log("Добавить вкладку")
          // tabs.push({
          //   name: "newtab"
          // })
          setTabs([
              ...tabs, {
              asd: "asd"
            }
          ])
        }}>
          <Text style={{ color: "rgb(255, 255, 255)", fontSize: 18, fontWeight: 700 }}>Добавить вкладку</Text>
        </TouchableOpacity>
      </View>
    
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
