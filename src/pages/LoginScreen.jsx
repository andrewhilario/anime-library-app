import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import React from 'react';
import SafeViewAndroid from '../utils/SafeViewAndroid';
import { useNavigation } from '@react-navigation/native';
import { createUser, auth, signIn } from '../utils/firebaseConfig';

export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('IndexScreen');
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    createUser(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleLogin = () => {
    signIn(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView
        vertical={true}
        alwaysBounceVertical={false}
        bounces={false}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
        className='w-full h-full'
      >
        <Image
          source={require('../../assets/animeBG.jpg')}
          className='object-cover mb-6'
        />
        <View className='w-full px-6 flex flex-col gap-4 mb-5'>
          <Text className='text-lg font-semibold'>Email</Text>
          <TextInput
            className='border-2 p-3 border-gray-400 rounded-lg'
            placeholder='Email'
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View className='w-full px-6 flex flex-col gap-4 mb-5'>
          <Text className='text-lg font-semibold'>Password</Text>
          <TextInput
            className='border-2 p-3 border-gray-400 rounded-lg'
            placeholder='Password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View className='px-8 w-full flex flex-col'>
          <TouchableOpacity
            onPress={handleLogin}
            className='w-full bg-teal-500 p-3 items-center rounded-lg'
          >
            <Text className='text-white text-xl font-bold'>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            className='w-full border-teal-500 border-2 p-3 items-center rounded-lg mt-5'
          >
            <Text className='text-teal-500 text-xl font-bold'>Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
