import apiInstance from "../apiConfig";

export const apiGoogleLogin = async () => {
  await apiInstance
    .get("/user/google")
    .then((result) => {
      console.log("SUCC apiGoogleLogin", result.data);
      return result.data;
    })
    .catch((err) => {
      console.log("ERR apiGoogleLogin", err);
      return null;
    });
};

