import { useMutation } from "@tanstack/react-query"
import loginApi from "../Pages/Login/-api/login-api"


export const useLogin = () => {
    return useMutation({
        mutationKey : "login",
        mutationFn : (data) => {
            console.log(data);
            return loginApi(data)} ,

        onSuccess : () => {

        },
        onError : () => {

        }
    })
}

