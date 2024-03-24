import apiInstance from "../apiConfig";

export const apiGetProfile = async (ipEmail: string) => {
  const result = await apiInstance.get(`user/email?email=${ipEmail}`);
  // console.log("Res apiGetProfile", result);
  return result;
};
