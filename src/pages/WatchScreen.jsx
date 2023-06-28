import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import SafeViewAndroid from '../utils/SafeViewAndroid';
import { Video, ResizeMode } from 'expo-av';

export default function WatchScreen({ route }) {
  const [episodeObj, setEpisodeObj] = useState({});
  const [res, setRes] = useState(4);
  const [episode, setEpisode] = useState('');
  const { animeTitle, episodeId, episodeNumber } = route.params;
  const url = `https://api.consumet.org/anime/gogoanime/watch/${episodeId}?server=gogocdn`;

  useEffect(() => {
    const getEpisode = async () => {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data);
      setEpisodeObj(data);
      setEpisode(data.sources[res].url);
      //   console.log(data);
    };
    getEpisode();
  }, []);

  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <View className='w-full px-4'>
        <Text className='text-2xl font-bold pt-4 mb-4 text-black'>
          {animeTitle} EP{episodeNumber}
        </Text>
        <Video
          className='w-full h-[213px] bg-cyan-200'
          source={{ uri: episode }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          volume={1.0}
          audioPan={1.0}
          onLoad={() => console.log('Loading')}
          //   onPlaybackStatusUpdate={(status) => console.log(status)}
        />
        <View className='flex flex-col justify-between mt-4'>
          <Text className='text-md text-black font-semibold pb-4'>
            Resolution
          </Text>
          <View className='flex flex-row gap-4'>
            <TouchableOpacity
              className='px-4 py-2 bg-teal-400 rounded-md'
              activeOpacity={0.9}
              onPress={() => setRes(0)}
            >
              <Text className='text-white font-semibold'>360p</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='px-4 py-2 bg-teal-400 rounded-md'
              activeOpacity={0.9}
              onPress={() => setRes(1)}
            >
              <Text className='text-white font-semibold'>480p</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='px-4 py-2 bg-teal-400 rounded-md'
              activeOpacity={0.9}
              onPress={() => setRes(2)}
            >
              <Text className='text-white font-semibold'>720p</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='px-4 py-2 bg-teal-400 rounded-md'
              activeOpacity={0.9}
              onPress={() => setRes(3)}
            >
              <Text className='text-white font-semibold'>1080p</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
