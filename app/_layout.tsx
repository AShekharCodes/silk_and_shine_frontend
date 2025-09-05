import { StyledStack } from "@/components/navigation/stack";
import "@/global.css";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useColorScheme } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const InitialLayout = () => {
  return (
    <StyledStack
      initialRouteName="onboarding"
      screenOptions={{ animation: "ios_from_right" }}
    >
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </StyledStack>
  );
};

const RootLayout = () => {
  // const colorScheme = useColorScheme();

  return (
    <>
      {/* <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}> */}
      <StatusBar style="dark" />
      <InitialLayout />
      {/* </ThemeProvider> */}
    </>
  );
};

export default RootLayout;
