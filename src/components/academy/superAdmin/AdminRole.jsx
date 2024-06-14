import React, { useEffect, useState } from 'react'
import axios from '../../../utils/axios';
import UserCardAdmin from './user/UserCardAdmin';

const AdminRole = () => {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/users')
          .then(res => setUsers(res.data));
      }, []);
      console.log(users)

  return (
    <div className='adminRoles'>
      {
            users.map((user, index) => (
                
                <UserCardAdmin
                key={index}
                user={user}
                users={users}
                setUsers={setUsers}
                />
            ))
        }
    </div>
  )
}

export default AdminRole