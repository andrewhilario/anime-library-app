import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button, ScrollView, SafeAreaView } from 'react-native';
import SettingsScreen from './SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimeCarousel from '../components/AnimeCarousel';
import AnimeLibrary from '../components/AnimeLibrary';
import MangaLibrary from '../components/MangaLibrary';
import AnimeInfo from '../components/AnimeInfo';
import LoginScreen from './LoginScreen';
import SafeViewAndroid from '../utils/SafeViewAndroid';
import WatchScreen from './WatchScreen';

function HomeScreenStack() {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView
        vertical={true}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className='bg-teal-500'
        showsVerticalScrollIndicator={false}
        // className='items-center bg-teal-500 h-full'
      >
        <Text className='text-3xl font-bold pt-4 text-white'>
          Anime & Manga Library
        </Text>
        <AnimeCarousel />
        <AnimeLibrary />
        <MangaLibrary />
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreenStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AnimeInfo'
        component={AnimeInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='WatchScreen'
        component={WatchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default HomeScreen;
