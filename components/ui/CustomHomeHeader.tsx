import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { View, Text } from "react-native";
import SearchBar from "./SearchBar";

const CustomHomeHeader = () => {
  return (
    <View className="flex-col w-full gap-2 bg-primary-default px-2 pt-safe pb-2">
      <View className="flex-row items-center gap-2">
        <SearchBar
          showSearch={false}
          // onPress={() => router.push("/(tabs)/search")}
        />

        <Ionicons
          name="camera-outline"
          size={24}
          color="black"
          onPress={() => console.log("Camera pressed")}
        />
      </View>
      <View className="flex-row items-center gap-2 p-2">
        <Ionicons name="location" size={18} color="black" />
        <Text className="font-poppins-medium text-base">
          Deliver to Abhishek - Guwahati, 781125
        </Text>

        <Ionicons name="chevron-down" size={20} />
      </View>
    </View>
  );
};

export default CustomHomeHeader;
