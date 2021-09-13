import * as SecureStore from "expo-secure-store";

export async function savePoints(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

export async function getPoints(key: string) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert("No values stored under that key.");
  }
}
