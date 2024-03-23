import apiInstance from "../apiConfig";

export const apiGetMatchByMatchNo = async (matchNo: any) => {
  const result = await apiInstance.get(`match?matchNo=${matchNo}`);

  return result;
};

export const apiGetMatchesByStatus = async (status: any) => {
  const result = await apiInstance.get(`match/status?status=${status}`);

  return result;
};

export const apiGetTrendingMatches = async () => {
  const result = await apiInstance.get(`match/trending`);
  return result;
};

export const apiGetMatchByTeamName = async (teamName: any) => {
  const result = await apiInstance.get(`match/team?team=${teamName}`);
  return result;
};