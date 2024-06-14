import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setAuth, setToken } from '../authSlice';
import axios from '../../utils/axios';
import { showNotification } from '../notifications/notificationSlice';


const Login = ({setShowLogin, showLogin}) => {

  

  function logFalse() {
    setShowLogin(false)
  }
  const { handleSubmit, register } = useForm();
  const [ isLoading, setIsLoading ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const submit = async data => {
    setIsLoading(true);
    try {
      const res = await axios.post('/users/login', data);
      dispatch(setToken(res.data.token));
      dispatch(setAuth({
        ...res.data, authStatus: 'authenticated'
      }));
      navigate('/academy/home');
      setShowLogin(false)
    } catch (error) {
      if(error.response.status === 401) {
        dispatch(showNotification({
          variant: "danger",
          message: "Invalid credentials",
        }));
      }
    } finally { setIsLoading(false); }
  }

  return (
    <div className={showLogin ? 'loginP' : 'loginP loginPF'}>
      <div className='modal'>
        <div className='img'>
          <img src="/img/logoalfa.png" alt="" />
        </div>
        <form className='form' onSubmit={handleSubmit(submit)}>
          <input type="email" placeholder='Correo electrónico' {...register("email")}/>
          <input type="password" placeholder='Contraseña' {...register("password")}/>
          <button type='submit'>EMPEZAR AHORA</button>
        </form>
        <i className='bx bx-x' onClick={logFalse}></i>
      </div>
    </div>
  )
}

export default Login