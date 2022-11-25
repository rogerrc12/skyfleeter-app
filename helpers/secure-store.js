import * as SecureStore from "expo-secure-store";

export const setSecureItem = async (key, value) => {
  if (!value) return;
  const JSONValue = JSON.stringify(value);

  await SecureStore.setItemAsync(key, JSONValue);

  return "item saved";
};

export const getSecureItem = async (key) => {
  const value = await SecureStore.getItemAsync(key);
  if (!value) return;

  const parsedValue = JSON.parse(value);

  return parsedValue;
};

export const deleteSecureItem = async (key) => {
  await SecureStore.deleteItemAsync(key);

  return "item deleted";
};
