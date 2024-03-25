import apiInstance from "../apiConfig";

export const apiGetUserTopups = async (userId: number) => {
  const result = await apiInstance.get(`/topup/user?userId=${userId}`);
  return result;
};

export const apiNewTopup = async (data: any) => {
  const result = await apiInstance.post(`/topup/new`, data);
  // console.log("Res apiNewTopup", result);
  return result;
};
