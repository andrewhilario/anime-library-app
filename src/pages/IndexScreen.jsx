import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator();
function IndexScreen() {
  return (
    <Tabs.Navigator
      initialRouteName='LoginScreen'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'teal',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tabs.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}

export default IndexScreen;
