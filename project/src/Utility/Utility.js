import jwt_decode from "jwt-decode";

export const parseToken = (token) => {
  return jwt_decode(token);
};

export const toggleStorage = (token) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};

export const validToken = (token) => {
  const data = jwt_decode(token);
  const currentData = new Date() / 1000;

  return data.exp > currentData;
};
