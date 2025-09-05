import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const cartItems = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: "$199.99",
    quantity: 1,
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Headphones",
  },
  {
    id: "2",
    name: "ComfortKnit Sneakers",
    price: "$89.95",
    quantity: 2,
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Sneakers",
  },
  {
    id: "3",
    name: "Modern Tech Backpack",
    price: "$49.99",
    quantity: 1,
    image: "https://placehold.co/400x400/F8F9FA/1A1A1A?text=Backpack",
  },
];

const Cart = () => {
  const total = cartItems
    .reduce(
      (sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity,
      0
    )
    .toFixed(2);

  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <Text className="font-poppins-bold text-lg text-text-default px-4 pt-4 mb-2">
        Your Cart
      </Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="flex-row items-center px-4 py-3 border-b border-background-soft">
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded-lg"
            />
            <View className="ml-4 flex-1">
              <Text className="font-poppins-medium text-text-default">
                {item.name}
              </Text>
              <Text className="font-poppins-regular text-text-muted">
                Quantity: {item.quantity}
              </Text>
              <Text className="font-poppins-bold text-primary-default mt-1">
                {item.price}
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="trash-outline" size={24} color="#E63946" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View className="px-4 py-4 border-t border-background-soft">
        <View className="flex-row justify-between mb-4">
          <Text className="font-poppins-medium text-text-default">Total:</Text>
          <Text className="font-poppins-bold text-primary-default">
            ${total}
          </Text>
        </View>
        <TouchableOpacity className="bg-primary-default rounded-lg py-4">
          <Text className="font-poppins-bold text-white text-center">
            Proceed to Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
