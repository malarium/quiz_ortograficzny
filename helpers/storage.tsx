import * as SecureStore from "expo-secure-store";

export async function savePoints(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getPoints(key: string): Promise<string | null> {
  return await SecureStore.getItemAsync(key);
}
