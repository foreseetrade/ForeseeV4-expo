// https://github.com/talut/rn-secure-storage

// expo-secure-store
import * as SecureStore from "expo-secure-store";

export const getExpoStorage = async (key: string) => {
  await SecureStore.getItemAsync(key)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const setExpoStorage = async (key: string, value: string) => {
  await SecureStore.setItemAsync(key, value)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const deleteExpoStorage = async (key: string) => {
  await SecureStore.deleteItemAsync(key)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};

export const checkExpoStorage = async () => {
  await SecureStore.isAvailableAsync()
    .then((isAvailable) => {
      console.log(isAvailable);
      return isAvailable;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
