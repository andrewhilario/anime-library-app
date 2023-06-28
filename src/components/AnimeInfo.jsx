import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import SafeViewAndroid from '../utils/SafeViewAndroid';
import { useNavigation } from '@react-navigation/native';

function AnimeInfo({ route }) {
  const [animeInfo, setAnimeInfo] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const { itemId } = route.params;

  const url = `https://api.consumet.org/anime/gogoanime/info/${itemId}`;
  const navigation = useNavigation();
  useEffect(() => {
    const getAnimeInfo = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data.episodes);
      setEpisodes(data.episodes);
      setAnimeInfo(data);
    };
    getAnimeInfo();
  }, []);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <ScrollView
        vertical={true}
        contentContainerStyle={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20
        }}
      >
        <View className='flex flex-row justify-between w-full h-[425px] rounded-2xl'>
          <Image
            source={{ uri: animeInfo.image }}
            className='w-full h-full object-cover rounded-2xl bg-cyan-500 shadow-lg'
          />
        </View>
        <View className='pt-5'>
          <Text className='text-2xl font-bold pt-3 pb-8'>
            {animeInfo.title}
          </Text>
          <Text className='text-lg font-medium '>{animeInfo.description}</Text>
        </View>
        <View className='w-full'>
          <Text className='text-2xl font-bold pt-3 pb-8'>Other Details</Text>
          <View className='flex flex-row justify-between'>
            <View className='flex flex-col gap-5'>
              <Text className='text-lg font-semibold'>Type</Text>
              <Text className='text-lg font-semibold'>Status</Text>
              <Text className='text-lg font-semibold'>Sub or Dub</Text>
              <Text className='text-lg font-semibold'>Total Episodes</Text>
            </View>
            <View className='flex flex-col gap-5'>
              <Text className='text-lg font-semibold'>{animeInfo.type}</Text>
              <Text className='text-lg font-semibold'>{animeInfo.status}</Text>
              <Text className='text-lg font-semibold uppercase'>
                {animeInfo.subOrDub}
              </Text>
              <Text className='text-lg font-semibold'>
                {animeInfo.totalEpisodes}
              </Text>
            </View>
          </View>
        </View>
        <View className='w-full mt-5'>
          <Text className='text-2xl font-bold pt-3'>Episodes</Text>

          <View className='flex gap-5 mt-2'>
            {episodes.map((episode) => (
              <TouchableOpacity
                key={episode.id}
                activeOpacity={1}
                className='p-3 border-b-[1px]'
                onPress={() =>
                  navigation.navigate('WatchScreen', {
                    animeTitle: animeInfo.title,
                    episodeId: episode.id,
                    episodeNumber: episode.number
                  })
                }
              >
                <Text className='text-lg font-semibold text-black'>
                  {animeInfo.title} EP{episode.number}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AnimeInfo;
