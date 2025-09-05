import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const exploreCategories = [
  {
    id: "1",
    name: "Electronics",
    image: "https://placehold.co/400x200/FF6B00/FFFFFF?text=Electronics",
  },
  {
    id: "2",
    name: "Fashion",
    image: "https://placehold.co/400x200/00B894/FFFFFF?text=Fashion",
  },
  {
    id: "3",
    name: "Home & Kitchen",
    image: "https://placehold.co/400x200/E65A00/FFFFFF?text=Home",
  },
  {
    id: "4",
    name: "Beauty & Health",
    image: "https://placehold.co/400x200/6C757D/FFFFFF?text=Beauty",
  },
  {
    id: "5",
    name: "Sports",
    image: "https://placehold.co/400x200/FF8640/FFFFFF?text=Sports",
  },
  {
    id: "6",
    name: "Books",
    image: "https://placehold.co/400x200/009C7A/FFFFFF?text=Books",
  },
];

const Explore = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <Text className="font-poppins-bold text-lg text-text-default px-4 pt-4 mb-2">
        Explore Categories
      </Text>
      <FlatList
        data={exploreCategories}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-1 m-2 bg-background-soft rounded-lg overflow-hidden">
            <Image source={{ uri: item.image }} className="w-full h-24" />
            <Text className="font-poppins-medium text-text-default p-3 text-center">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Explore;
