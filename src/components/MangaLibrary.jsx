import React, { useState, useEffect } from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";

function MangaLibrary() {
  const [randomManga, setRandomManga] = useState([]);
  const url = "https://api.jikan.moe/v4/top/manga";

  useEffect(() => {
    const getRandomManga = async () => {
      const response = await fetch(url);
      const data = await response.json();
      //   console.log(data.data);
      setRandomManga(data.data);
      //   console.log(randomManga.map((manga) => manga.images.jpg.image_url));
    };
    getRandomManga();
  }, []);
  return (
    <>
      <View className="bg-white w-full h-[400px] pb-6 px-6">
        <View>
          <Text className="text-2xl font-bold text-teal-700">
            Manga Library
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
              {randomManga.map((manga, index) => {
                return (
                  <>
                    <View
                      key={index}
                      className="w-[200px] text-white bg-white mx-auto mt-3 mb-5 p-3 rounded-2xl shadow-xl"
                    >
                      <View className="flex flex-row justify-between w-full h-[225px]">
                        <Image
                          source={{ uri: manga.images?.jpg?.large_image_url }}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </View>
                      <Text className="text-lg font-bold mt-2 text-teal-700">
                        {manga.title}
                      </Text>
                    </View>
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

export default MangaLibrary;
