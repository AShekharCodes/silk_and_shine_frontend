import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const profileOptions = [
  {
    id: "1",
    name: "My Orders",
    icon: <Ionicons name="receipt-outline" size={24} color="#1A1A1A" />,
  },
  {
    id: "2",
    name: "Addresses",
    icon: <Ionicons name="location-outline" size={24} color="#1A1A1A" />,
  },
  {
    id: "3",
    name: "Settings",
    icon: <Ionicons name="settings-outline" size={24} color="#1A1A1A" />,
  },
  {
    id: "4",
    name: "Logout",
    icon: <Ionicons name="log-out-outline" size={24} color="#1A1A1A" />,
  },
];

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-default">
      <View className="items-center pt-8 pb-4 bg-primary-light">
        <Image
          source={{
            uri: "https://placehold.co/100x100/6C757D/FFFFFF?text=User",
          }}
          className="w-24 h-24 rounded-full"
        />
        <Text className="font-poppins-bold text-xl text-text-default mt-4">
          John Doe
        </Text>
        <Text className="font-poppins-regular text-text-muted">
          john.doe@example.com
        </Text>
      </View>
      <FlatList
        data={profileOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity className="flex-row items-center px-4 py-4 border-b border-background-soft">
            {item.icon}
            <Text className="font-poppins-medium text-text-default ml-4">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
