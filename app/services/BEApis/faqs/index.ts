import apiInstance from "../apiConfig";

export const apiGetFaqs = async () => {
  const result = await apiInstance.get(`faq/`);
  return result;
};

