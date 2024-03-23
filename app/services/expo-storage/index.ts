// https://github.com/talut/rn-secure-storage

// expo-secure-store

import * as SecureStore from "expo-secure-store";

export const getExpoStorage = async (key: string) => {
  try {
    const res = await SecureStore.getItemAsync(key);
    console.log("Res getExpoStorage", res);
    return res !== null ? res : null; // Return null if item not found
  } catch (err) {
    console.error("Err getExpoStorage", err);
    throw err; // Throw the error for better handling at the caller level
  }
};

export const setExpoStorage = async (key: string, value: any) => {
  try {
    const serializedValue = JSON.stringify(value);
    await SecureStore.setItemAsync(key, serializedValue);
    console.log("Value stored successfully");
    return true;
  } catch (err) {
    console.error("Err setExpoStorage", err);
    return false;
  }
};

export const deleteExpoStorage = async (key: string) => {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log("Item deleted successfully");
    return true;
  } catch (err) {
    console.error("Err deleteExpoStorage", err);
    return false;
  }
};

export const checkExpoStorage = async () => {
  try {
    const isAvailable = await SecureStore.isAvailableAsync();
    console.log("isAvailable", isAvailable);
    return isAvailable;
  } catch (err) {
    console.error("Err checkExpoStorage", err);
    return false;
  }
};
