import apiInstance from "../apiConfig";

export const getAppInfo = async () => {
  const result = await apiInstance.get(`appInfo`);
  return result;
};
