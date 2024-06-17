import {RouterProvider } from 'react-router-dom'
import router from './reuter'
import { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { authenticateThunk } from './components/authSlice'
import './App.css'
import { Spinner } from 'react-bootstrap'

function App() {
  const dispatch = useDispatch()
  const { authStatus } = useSelector(state => state.auth);
  
  useEffect(() => {
    dispatch(authenticateThunk());
  }, [ dispatch ]);
  
  if(authStatus === 'pending'){
    return <Spinner />
}
return (
    <>
        <RouterProvider router={router} />
        
    </>
)
}

export default App
