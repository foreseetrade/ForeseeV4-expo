import axios from "axios";
import { getExpoStorage } from "../expo-storage";

// Assuming you have stored your backend URL in a variable
const ENV_BACKEND_URL =
  process.env.EXPO_BE_LOCAL_URL || "http://localhost:3000";

const ENV_BE_DEV_URL = process.env.EXPO_BE_DEV_URL;
const ENV_BE_PROD_URL = process.env.EXPO_BE_PROD_URL;
const ENV_BE_URL =
  process.env.EXPO_BE_LOCAL_URL ||
  process.env.EXPO_BE_DEV_URL ||
  process.env.EXPO_BE_PROD_URL;

// Create an instance of Axios with your backend URL
const apiInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor
apiInstance.interceptors.request.use(
  async (config) => {
    try {
      // Get JWT token from AsyncStorage (React Native's equivalent of localStorage)
      // const jwtToken = await getExpoStorage("jwt");

      // const jwt = await getExpoStorage("jwt");
      // Add your default headers here
      // config.headers["Authorization"] = `Bearer ${jwt}`;
      config.headers["Content-Type"] = "application/json";
      config.headers["Access-Control-Allow-Origin"] = "*";
      config.headers["Access-Control-Allow-Methods"] = "*";

      // Modify Content-Type for specific routes - for multipart/form-data
      // Useful for Forms Data
      const routesForMultipartType = [""];

      if (routesForMultipartType.includes(config.url || "")) {
        config.headers["Content-Type"] = "multipart/form-data";
      } else {
        config.headers["Content-Type"] = "application/json";
      }

      // console.log("config");
      // console.log(config);
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
