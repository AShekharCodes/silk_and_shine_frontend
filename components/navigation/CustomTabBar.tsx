import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, useColorScheme } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [tabBarWidth, setTabBarWidth] = useState(0);
  const tabWidth = tabBarWidth / state.routes.length;
  const translateX = useSharedValue(state.index * tabWidth);
  // const colorScheme = useColorScheme();
  // const isDarkMode = colorScheme === "dark";
  const indicatorPadding = 20;
  const indicatorWidth =
    tabWidth > 2 * indicatorPadding
      ? tabWidth - 2 * indicatorPadding
      : tabWidth;
  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  useEffect(() => {
    translateX.value = withSpring(state.index * tabWidth + indicatorPadding);
  }, [state.index, tabWidth, translateX]);
  return (
    <View
      className="flex-row bg-primary-default/20 relative pb-safe py-2"
      onLayout={(e) => setTabBarWidth(e.nativeEvent.layout.width)}
    >
      {tabBarWidth > 0 && (
        <Animated.View
          className="absolute top-0 left-0 z-10 bg-primary-default h-1 rounded-b-lg"
          style={[{ width: indicatorWidth }, indicatorStyle]}
        />
      )}
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center justify-center mb-2"
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? "#FF6B00" : "#000000",
                size: isFocused ? 30 : 28,
              })}
            {isFocused ? (
              ""
            ) : (
              <Text className="text-xs mt-1 font-poppins-bold text-black">
                {label as string}
              </Text>
            )}
            {/* {route.name === "cart" && (
              <Text className="absolute right-2 top-0 font-poppins-regular text-base rounded-full bg-white w-5">
                {options.tabBarBadge}
              </Text>
            )} */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
