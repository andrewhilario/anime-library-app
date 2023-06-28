import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import SafeViewAndroid from '../utils/SafeViewAndroid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { auth, signOutUser } from '../utils/firebaseConfig';

function SettingsScreen() {
  const navigation = useNavigation();
  const handleSignOut = () => {
    signOutUser(auth)
      .then(() => {
        navigation.replace('LoginScreen');
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <ScrollView style={SafeViewAndroid.AndroidSafeArea}>
      <View className='flex flex-row items-center justify-between p-5 bg-cyan-600'>
        <View className='flex flex-row items-center gap-2'>
          <View className=' w-14 h-14 rounded-full bg-teal-400'></View>
          <Text className='text-lg font-semibold text-white'>
            {auth.currentUser.email}
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleSignOut}
          activeOpacity={0.7}
          className='bg-teal-400 px-5 py-2 rounded-md'
        >
          <Text className='text-lg font-semibold text-white '>
            {auth.currentUser ? 'Logout' : 'Login'}
          </Text>
        </TouchableOpacity>
      </View>
      <View className='flex flex-col items-center justify-center p-5 gap-4'>
        <View className='flex flex-row items-center w-full gap-5'>
          <Ionicons name='person' size={30} color='teal' />
          <Text className='text-lg font-semibold text-teal-500'>Profile</Text>
        </View>
        <View className='flex flex-row items-center w-full gap-5'>
          <Ionicons name='person' size={30} color='teal' />
          <Text className='text-lg font-semibold text-teal-500'>Test </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default SettingsScreen;
