import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function AnimeLibrary() {
  const [topAiring, setTopAiring] = useState([]);
  const url = "https://api.consumet.org/anime/gogoanime/top-airing";
  const navigation = useNavigation();
  useEffect(() => {
    const getTopAiring = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results.id);
      setTopAiring(data.results);
    };
    getTopAiring();
  }, []);
  return (
    <>
      <View className="bg-white w-full h-[400px] rounded-t-3xl p-6">
        <View>
          <Text className="text-2xl font-bold text-teal-700">
            Anime Library
          </Text>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            alwaysBounceHorizontal={false}
            className="mt-3"
          >
            <View className="flex flex-row justify-between">
              {topAiring.map((anime, index) => {
                return (
                  <>
                    <TouchableOpacity
                      key={index}
                      activeOpacity={1.0}
                      onPress={() => {
                        navigation.navigate("AnimeInfo", {
                          itemId: anime.id
                        });
                      }}
                      className="w-[10%] text-white bg-white mx-auto mt-3 mb-5 p-3 rounded-2xl shadow-xl"
                    >
                      <View
                        key={anime.id}
                        className="flex flex-row justify-between w-full h-[225px]"
                      >
                        <Image
                          source={{ uri: anime.image }}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </View>
                      <Text className="text-lg font-bold mt-2 text-teal-700">
                        {anime.title}
                      </Text>
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default AnimeLibrary;
