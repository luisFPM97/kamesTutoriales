import React, { useEffect, useState } from 'react'
import Home from '../home/Home'
import Navbar from '../navBar/Navbar'
import { Outlet } from 'react-router-dom'
import axios from '../../utils/axios'


const HomeAcademy = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const url ='http://localhost:8080/users'
    axios.get('/users')
      .then(res => setUsers(res.data));
  }, []);
 console.log(users)
  return (
    <div className='homeAcademy'>
        <Navbar/>
        <Outlet />
        <Home/>
       
    </div>
  )
}

export default HomeAcademy