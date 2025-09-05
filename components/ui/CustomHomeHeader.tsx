import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text, Pressable } from "react-native";
import SearchBar from "./SearchBar";

const CustomHomeHeader = () => {
  return (
    <View className="flex-col w-full gap-2 bg-primary-default px-2 pt-safe pb-2">
      <View className="flex-row items-center gap-2">
        <SearchBar
          showSearch={false}
          showMic={false}
          onPress={() => router.push("/(tabs)/search")}
        />

        {/* <Ionicons
          name="camera-outline"
          size={24}
          color="black"
          onPress={() => console.log("Camera pressed")}
        /> */}
      </View>
      <View className="flex-row items-center gap-2 p-2 bg-white rounded-md border border-black">
        <Ionicons name="location" size={14} color="black" />
        <Text className="font-poppins-medium text-sm text-gray-600">
          Deliver to Abhishek - Guwahati, 781125
        </Text>

        <Pressable
          className="ml-auto"
          onPress={() => console.log("Address Change")}
        >
          <Text className="text-xs  font-poppins-regular">Change</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CustomHomeHeader;
