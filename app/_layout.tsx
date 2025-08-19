import { StyledStack } from "@/components/navigation/stack";
import "@/global.css";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
import { Stack } from "expo-router";
// import { useColorScheme } from "react-native";

const InitialLayout = () => {
  return (
    <StyledStack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </StyledStack>
  );
};

const RootLayout = () => {
  // const colorScheme = useColorScheme();

  return (
    // <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
    <InitialLayout />
    // </ThemeProvider>
  );
};

export default RootLayout;
