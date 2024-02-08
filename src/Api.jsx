export const Api_Url = "https://dummyjson.com";

export function Post_Login(body) {
  return {
    url: "https://dummyjson.com/auth/login",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
}
export function Get_User(token) {
  return {
    url: Api_Url + "/auth/me",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
