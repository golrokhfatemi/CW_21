import axios from "axios";
import { BASE_URL } from "../Constant";
import Cookies from "js-cookie";
import { refreshToken } from "../-api/refreshtoken";
import loginApi from "../Pages/Login/-api/login-api";


const httpRequest =axios.create({
    baseURL : BASE_URL ,
    headers :{
        "Content-Type": "application/json",
    }
})

httpRequest.interceptors.request.use((config) => {
    const accessTokn = Cookies.get("accessToken")
    if(accessTokn){
        config.headers.Authorization = `Bearer ${accessTokn}`
    }
    return config
} , (error) => {

})

httpRequest.interceptors.response.use((config) => {
    
    return config
},(error) => {
    // console.log(error.message);
    const status = error.response.status
    const originRequest =error.config
    const refresh = Cookies.get('refreshToken')
    // console.log(refresh);
    
    if(status === 401 && refreshToken){
        const res = refreshToken(refresh)
        .then (res => {
            Cookies.set("accessToken" , res.data.access)

          return  httpRequest.request(originRequest)
            
        }
        )
        .catch(error => {
            return Promise.reject(error);
        })
        
    }

}
)

 export default httpRequest