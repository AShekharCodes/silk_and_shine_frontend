import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 bg-background-default justify-center px-4">
      <Text className="font-poppins-bold text-2xl text-text-default mb-8 text-center">
        Sign In
      </Text>
      <View className="flex-row items-center bg-background-soft rounded-lg p-3 mb-4">
        <Ionicons name="mail-outline" size={20} color="#6C757D" />
        <TextInput
          placeholder="Email"
          className="flex-1 ml-2 font-poppins-regular text-text-default"
          keyboardType="email-address"
        />
      </View>
      <View className="flex-row items-center bg-background-soft rounded-lg p-3 mb-6">
        <Ionicons name="lock-closed-outline" size={20} color="#6C757D" />
        <TextInput
          placeholder="Password"
          className="flex-1 ml-2 font-poppins-regular text-text-default"
          secureTextEntry
        />
      </View>
      <TouchableOpacity className="bg-primary-default rounded-lg py-4 mb-4">
        <Text className="font-poppins-bold text-white text-center">
          Sign In
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text className="font-poppins-medium text-primary-default text-center">
          Don't have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
