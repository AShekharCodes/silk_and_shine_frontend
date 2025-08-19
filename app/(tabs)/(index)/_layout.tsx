import { StyledStack } from "@/components/navigation/stack";
import CustomHomeHeader from "@/components/ui/CustomHomeHeader";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <StyledStack
      contentClassName="bg-white"
      headerClassName="bg-primary-default"
      screenOptions={{ header: () => <CustomHomeHeader /> }}
    >
      <Stack.Screen name="index" />
    </StyledStack>
  );
};

export default StackLayout;
