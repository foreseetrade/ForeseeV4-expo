import apiInstance from "../apiConfig";

export const apiGetProfile = async (ipEmail: string) => {
  const result = await apiInstance.get(`/user/getUser?email=${ipEmail}`);
  return result;
};
