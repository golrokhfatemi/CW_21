import httpRequest from "../../../Services/Http-request"


const loginApi = async(values) => { 
    return  await httpRequest.post('/api/accounts/login/' ,values)
    

}
export default loginApi