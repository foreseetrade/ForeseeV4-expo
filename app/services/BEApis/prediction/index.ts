import apiInstance from "../apiConfig";

export const apiGetPredictions = async (data: any) => {
  const result = await apiInstance.get(`/prediction/user?userEmail=${data}`);
  return result;
};

export const apiNewPrediction = async (data: any) => {
  const result = await apiInstance.post(`/prediction/new`, data);
  return result;
};
