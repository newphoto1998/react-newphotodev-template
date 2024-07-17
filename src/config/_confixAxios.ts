// import { BASE_URL_PART } from "./constants";
import { AUTH_LOGIN } from "./contants"
import Axios from "axios"






const AUTH = Axios.create({
    
    baseURL:AUTH_LOGIN,
    headers:{
        'Content-Type':'application/json'
    }
    
})

export default{ 
    AUTH ,
  
};