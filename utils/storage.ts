import * as SecureStore from "expo-secure-store";
import { MMKV } from "react-native-mmkv";

// For sensitive data (tokens, secrets)
export const secureStorage = {
  setItemAsync: async (key: string, value: any) => {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  },
  getItemAsync: async <T = any>(key: string): Promise<T | null> => {
    const value = await SecureStore.getItemAsync(key);
    return value ? JSON.parse(value) : null;
  },
  deleteItemAsync: async (key: string) => {
    await SecureStore.deleteItemAsync(key);
  },
};

// Create an instance of MMKV
const mmkv = new MMKV();

export const storage = {
  set: (key: string, value: any) => {
    mmkv.set(key, JSON.stringify(value));
  },
  get: <T = any>(key: string): T | null => {
    const value = mmkv.getString(key);
    return value ? JSON.parse(value) : null;
  },
  delete: (key: string) => {
    mmkv.delete(key);
  },
  getAllKeys: () => mmkv.getAllKeys(),
};
