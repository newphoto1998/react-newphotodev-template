import http from "../../config/_confixAxios"
// Method Get all product

// step 1 create fuction


const Login = (username:string,password:string) => {
    return http.AUTH.get(`authen?username=${username}&password=${encodeURIComponent(password)}`);
  };

export default {
    Login,
};