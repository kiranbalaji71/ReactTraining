import axios from "axios";
import { URL } from "./Axios";

export const refresh = async () => {
  const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
  let config = {
    method: "get",
    url: `${URL}/user/refresh`,
    headers: {
      Authorization: "Bearer " + refreshToken,
    },
  };
  let data;
  try {
    const response = await axios.request(config);
    data = response.data["new access"];
  } catch (err) {
    console.log(err);
  }
  return data;
};
