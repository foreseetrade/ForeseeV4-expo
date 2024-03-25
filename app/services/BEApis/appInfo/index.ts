import apiInstance from "../apiConfig";

export const getAppInfo = async () => {
  const result = await apiInstance.get(`app-info/app-info`);
  return result;
};
