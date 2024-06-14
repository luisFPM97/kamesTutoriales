import axios from "axios"

const useAuth = ()=>{
    const registerUser =(user)=>{
        
        axios.post(url, user)
        .then(res => console.log(res.data))
        .catch(err=>console.log(err))
      }
      return {registerUser}
}
export default useAuth