
import { Container } from 'react-bootstrap'
import Navbar from '../../navBar/Navbar'


const UsersLayout = () => {
  return (
    <div>
      <Navbar />

      <Container className="py-5" >
          <Outlet />
      </Container>
    </div>
  )
}

export default UsersLayout