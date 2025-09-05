import React, { useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Welcome to Silk and Shine",
    description: "Shop the best products with exclusive deals.",
  },
  {
    id: "2",
    title: "Fast Delivery",
    description: "Get your favorites delivered to your doorstep quickly.",
  },
  {
    id: "3",
    title: "Easy & Secure Payment",
    description: "Checkout with safe, fast, and reliable payment options.",
  },
];

export default function Onboarding() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("/(tabs)/(index)"); // go to main app
    }
  };

  const handleSkip = () => {
    router.replace("/(tabs)/(index)");
  };

  const renderItem = ({ item }: any) => (
    <View style={{ width }} className="items-center justify-center px-6">
      <Text className="text-3xl font-poppins-bold text-primary-default text-center mb-4">
        {item.title}
      </Text>
      <Text className="text-base font-poppins-regular text-gray-600 text-center">
        {item.description}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <FlatList
          ref={flatListRef}
          data={slides}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(ev) => {
            const index = Math.round(ev.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Indicators */}
      <View className="flex-row gap-2 justify-center mb-4">
        {slides.map((_, i) => (
          <View
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === currentIndex ? "bg-primary-default" : "bg-gray-400"
            }`}
          />
        ))}
      </View>

      {/* Buttons */}
      <View className="flex-row justify-between px-6 pb-6">
        {currentIndex < slides.length - 1 ? (
          <TouchableOpacity
            onPress={handleSkip}
            className="bg-primary-default/40 px-5 py-2 rounded-lg"
          >
            <Text className="text-black font-poppins-medium text-base">
              Skip
            </Text>
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <TouchableOpacity
          onPress={handleNext}
          className="bg-primary-default px-5 py-2 rounded-lg"
        >
          <Text className="text-white font-poppins-medium text-base">
            {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
