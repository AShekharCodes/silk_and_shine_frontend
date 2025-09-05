import { Ionicons } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

type SearchBarProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  showSearch?: boolean;
  showMic?: boolean;
  showScanner?: boolean;
  onSearchPress?: () => void;
  onPress?: () => void;
};

const SearchBar = ({
  value,
  onChangeText,
  placeholder = "Search...",
  showSearch = true,
  showMic = true,
  showScanner = true,
  onSearchPress,
  onPress,
}: SearchBarProps) => {
  return (
    <View className="flex-1 flex-row gap-2 w-full h-12 items-center bg-white px-2 border border-black rounded-md overflow-hidden">
      <Ionicons name="search" size={22} color="#6C757D" />
      <TextInput
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
        className="flex-1 items-center justify-center h-16 text-black font-poppins-medium text-base"
      />
      {showSearch && (
        <TouchableOpacity
          onPress={onSearchPress}
          className="px-3 py-2 bg-primary-default rounded-md"
        >
          <Text className="text-white font-poppins-medium text-sm">Search</Text>
        </TouchableOpacity>
      )}
      {showScanner && (
        <Ionicons
          name="qr-code-outline"
          size={22}
          color="#6C757D"
          onPress={() => console.log("Scanner pressed")}
        />
      )}
      {showMic && (
        <Ionicons
          name="mic"
          size={22}
          color="#6C757D"
          onPress={() => console.log("Mic pressed")}
        />
      )}
    </View>
  );
};

export default SearchBar;
