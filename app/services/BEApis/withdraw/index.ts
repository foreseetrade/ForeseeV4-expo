import apiInstance from "../apiConfig";

export const apiGetUserWithdraws = async (userId: number) => {
  const result = await apiInstance.get(`/withdraw/user?userId=${userId}`);
  return result;
};

export const apiNewWithdraw = async (data: any) => {
  const result = await apiInstance.post(`/withdraw/new`, data);
  return result;
};
