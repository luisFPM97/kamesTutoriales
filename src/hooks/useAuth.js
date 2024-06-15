import axios from "axios"

const useAuth = ()=>{
    const registerUser =(user)=>{
        const url ='https://entregable4node.onrender.com'
        axios.post(url, user)
        .then(res => console.log(res.data))
        .catch(err=>console.log(err))
      }
      return {registerUser}
}
export default useAuth