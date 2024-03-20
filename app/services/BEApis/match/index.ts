import apiInstance from "../apiConfig";

export const apiGetMatchByMatchNo = async (matchNo: any) => {
  await apiInstance
    .get(`match?matchNo=${matchNo}`)
    .then((result) => {
      console.log("SUCC apiGetMatchByMatchNo", result.data);
      return result.data;
    })
    .catch((err) => {
      console.log("ERR apiGetMatchByMatchNo", err);
      return null;
    });
};
