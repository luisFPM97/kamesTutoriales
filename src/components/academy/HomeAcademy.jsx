import { Outlet} from 'react-router-dom'
import NavBarSA from './NavBarSA'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import axios from '../../utils/axios'





const HomeAcademy = () => {

    const [me, setMe] = useState()
    useEffect(() => {
      axios.get('/users/me')
      .then(res => setMe(res.data))
    }, [])
    console.log(me)
    
    
    
  return (
    <div className='homeAcademy'>
        <NavBarSA me={me}/>
        <Container className="py-5">
            <Outlet />
        </Container>
    </div>
  )
}

export default HomeAcademy