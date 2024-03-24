import apiInstance from "../apiConfig";

export const apiGetPredictions = async (ipEmail: string) => {
  const result = await apiInstance.get(`/prediction/user?userEmail=${ipEmail}`);
  return result;
};

export const apiNewPrediction = async (data: any) => {
  const result = await apiInstance.post(`/prediction/new`, data);
  return result;
};
