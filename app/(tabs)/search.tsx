import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const dummyResults = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$99.99",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Headphones",
  },
  {
    id: "2",
    name: "Running Shoes",
    price: "$79.99",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Shoes",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: "$149.99",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Watch",
  },
  {
    id: "4",
    name: "Backpack",
    price: "$49.99",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Backpack",
  },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <View className="px-4 pt-4 pb-2">
        <View className="flex-row items-center bg-background-soft rounded-lg p-3">
          <Ionicons name="search-outline" size={20} color="#6C757D" />
          <TextInput
            placeholder="Search for products..."
            className="flex-1 ml-2 font-poppins-regular text-text-default"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      <FlatList
        data={dummyResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-background-soft">
            <Image
              source={{ uri: item.image }}
              className="w-16 h-16 rounded-lg"
            />
            <View className="ml-4 flex-1">
              <Text className="font-poppins-medium text-text-default">
                {item.name}
              </Text>
              <Text className="font-poppins-bold text-primary-default mt-1">
                {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
