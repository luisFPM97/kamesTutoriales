import React, { useEffect, useState } from 'react'
import Home from '../home/Home'
import axios from '../../utils/axios';
import LoggedUser from './LoggedUser';
import HomePage from '../home/HomePage';

const AllUsers = () => {

    

  return (
    <div>
        <LoggedUser/>
        <Home/>
        
    </div>
  )
}

export default AllUsers