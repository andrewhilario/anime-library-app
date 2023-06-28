import * as React from 'react';
import LoginScreen from './src/pages/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/pages/IndexScreen';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='LoginScreen'
      >
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='IndexScreen' component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
