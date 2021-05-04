import jwt_decode from "jwt-decode";
export function getUserFromLocalStorage() {
  if (localStorage.getItem("token"))
    return jwt_decode(localStorage.getItem("token"));
}
