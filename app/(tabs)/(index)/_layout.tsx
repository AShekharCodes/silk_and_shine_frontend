import { StyledStack } from "@/components/navigation/stack";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <StyledStack
      contentClassName="bg-white dark:bg-gray-800"
      headerClassName="bg-primary-default text-white dark:text-black"
    >
      <Stack.Screen name="index" options={{ title: "" }} />
    </StyledStack>
  );
};

export default StackLayout;
