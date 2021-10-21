import getDataFromLocalhost from "../config/GetLocalhostData";

export const getTokenLocalHost = () => getDataFromLocalhost('user')?.token;
export const getAuthHeader = () => {
    return { headers: { Authorization: `Bearer ${getTokenLocalHost()}` } };
  };