import jwt_decode from "jwt-decode";
export function getUserFromLocalStorage() {
  return jwt_decode(localStorage.getItem("token"));
}
