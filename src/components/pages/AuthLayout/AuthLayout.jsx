import { Outlet } from 'react-router-dom'



const AuthLayout = () => {
    return (
        <div className='auth-container'>
            <div className="outlet-container">
                    <div className="w-100">
                        <Outlet />
                    </div>
            </div>
            
        </div>
    )
}

export default AuthLayout