import axios from "axios"

const useAuth = ()=>{
    const registerUser =(user)=>{
        const url ='http://localhost:8080/users'
        axios.post(url, user)
        .then(res => console.log(res.data))
        .catch(err=>console.log(err))
      }
      return {registerUser}
}
export default useAuth