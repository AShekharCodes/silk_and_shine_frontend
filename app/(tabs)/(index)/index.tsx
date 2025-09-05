import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    id: "1",
    name: "Apparel",
    image: "https://placehold.co/100x100/FF8640/FFFFFF?text=Apparel",
  },
  {
    id: "2",
    name: "Shoes",
    image: "https://placehold.co/100x100/00B894/FFFFFF?text=Shoes",
  },
  {
    id: "3",
    name: "Gadgets",
    image: "https://placehold.co/100x100/FF6B00/FFFFFF?text=Gadgets",
  },
  {
    id: "4",
    name: "Furniture",
    image: "https://placehold.co/100x100/6C757D/FFFFFF?text=Furniture",
  },
  {
    id: "5",
    name: "Beauty",
    image: "https://placehold.co/100x100/E65A00/FFFFFF?text=Beauty",
  },
];

const featuredProducts = [
  {
    id: "1",
    name: "Modern Tech Backpack",
    price: "$49.99",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Backpack",
    store: "Urban Gear",
  },
  {
    id: "2",
    name: "Wireless Noise-Cancelling Headphones",
    price: "$199.99",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Headphones",
    store: "AudioPhile",
  },
  {
    id: "3",
    name: "Classic Leather Watch",
    price: "$120.00",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Watch",
    store: "Timeless Pieces",
  },
  {
    id: "4",
    name: "ComfortKnit Sneakers",
    price: "$89.95",
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Sneakers",
    store: "SoleMates",
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View className="px-4 pt-4 pb-2 flex-row justify-between items-center">
          <View>
            <Text className="font-poppins-regular text-text-muted text-xs">
              Deliver to
            </Text>
            <TouchableOpacity className="flex-row items-center">
              <Ionicons name="location-outline" size={16} color="#FF6B00" />
              <Text className="font-poppins-medium text-text-default ml-1">
                New York, USA
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row items-center space-x-4">
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#1A1A1A"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="bag-outline" size={24} color="#1A1A1A" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Search Bar */}
        <View className="px-4 mt-4 mb-2">
          <View className="flex-row items-center bg-background-soft rounded-lg p-3">
            <Ionicons name="search-outline" size={20} color="#6C757D" />
            <TextInput
              placeholder="Search for products..."
              className="flex-1 ml-2 font-poppins-regular text-text-default"
            />
          </View>
        </View>

        {/* Banner */}
        <View className="px-4 my-4">
          <View className="bg-primary-light rounded-xl p-6 flex-row items-center justify-between overflow-hidden">
            <View>
              <Text className="font-poppins-bold text-white text-lg w-48">
                Get 50% Off Your First Order!
              </Text>
              <TouchableOpacity className="bg-white rounded-full px-4 py-2 mt-4 self-start">
                <Text className="font-poppins-bold text-primary-default">
                  Shop Now
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://placehold.co/150x150/FFFFFF/FF6B00?text=SALE",
              }}
              className="w-24 h-24 rounded-full absolute -right-4 -bottom-4"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="px-4 my-2">
          <Text className="font-poppins-bold text-lg text-text-default mb-2">
            Categories
          </Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity className="items-center mr-6">
                <View className="w-16 h-16 bg-background-soft rounded-full justify-center items-center">
                  <Image
                    source={{ uri: item.image }}
                    className="w-14 h-14 rounded-full"
                  />
                </View>
                <Text className="font-poppins-medium text-text-muted mt-2 text-xs">
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Featured Products */}
        <View className="px-4 my-4">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="font-poppins-bold text-lg text-text-default">
              Featured Products
            </Text>
            <TouchableOpacity>
              <Text className="font-poppins-medium text-primary-default">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {featuredProducts.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="w-[48%] bg-background-soft rounded-lg p-3 mb-4"
              >
                <Image
                  source={{ uri: item.image }}
                  className="w-full h-32 rounded-lg"
                />
                <Text className="font-poppins-medium text-text-default mt-2">
                  {item.name}
                </Text>
                <Text className="font-poppins-regular text-text-muted text-xs">
                  {item.store}
                </Text>
                <Text className="font-poppins-bold text-primary-default mt-1">
                  {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
