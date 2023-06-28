import React, { useState, useEffect } from "react";
import Carousel from "react-native-snap-carousel";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function AnimeCarousel() {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const url = "https://api.consumet.org/anime/gogoanime/recent-episodes";
  const navigation = useNavigation();
  useEffect(() => {
    const getTrending = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(itemId);
      setTrendingAnime(data.results);
    };
    getTrending();
  }, []);

  return (
    <Carousel
      sliderWidth={Dimensions.get("window").width}
      itemWidth={Dimensions.get("window").width}
      layout={"default"}
      data={trendingAnime}
      renderItem={({ item, index }) => {
        return (
          <>
            <TouchableOpacity
              key={index}
              activeOpacity={1.0}
              onPress={() =>
                navigation.navigate("AnimeInfo", { itemId: item.id })
              }
              className="w-[90%] text-white bg-white mx-auto mt-3 mb-5 p-3 rounded-2xl shadow-xl"
            >
              <View className="flex flex-row justify-between w-full h-[225px]">
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </View>
              <Text className="text-lg font-bold mt-2 text-teal-700">
                {item.title}
              </Text>
            </TouchableOpacity>
          </>
        );
      }}
    />
  );
}

export default AnimeCarousel;
