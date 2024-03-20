import Constants from 'expo-constants';

Object.entries(Constants.expoConfig?.extra?.env).forEach(([key, value]) => {
  if (!key.startsWith('EXPO_') || process.env[key]) return;
  process.env[key] = `${value}`;
});

export const envEnvironment = "dev";

export const envEXPO_BE_LOCAL_URL = process.env.EXPO_BE_LOCAL_URL;
export const envEXPO_BE_DEV_URL = process.env.EXPO_BE_DEV_URL;
export const envEXPO_BE_PROD_URL = process.env.EXPO_BE_PROD_URL;
export const envEXPO_BE_URL =
  envEnvironment === "dev"
    ? envEXPO_BE_DEV_URL
    : envEnvironment === "local"
    ? envEXPO_BE_LOCAL_URL
    : process.env.EXPO_BE_PROD_URL;
