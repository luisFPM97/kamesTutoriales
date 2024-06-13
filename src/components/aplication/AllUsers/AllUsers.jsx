import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AllUsers = () => {

    const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(res => setUsers(res.data));
  }, []);
 console.log(users)
  return (
    <div>AllUsers</div>
  )
}

export default AllUsers