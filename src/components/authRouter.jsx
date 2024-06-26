import AuthLayout from './pages/AuthLayout/AuthLayout';
import Register from './register/Register';
import VerificateEmail from './verificateEmail/VerificateEmail';
import Home from './home/Home';
import HomePage from './home/HomePage'

const authRouter = {
    path: "auth",
    element: <AuthLayout />,
    children: [
        {
            path: "home",
            element: <HomePage />,
        },
        {
            path: "signup",
            element: <Register/>,
        },
        {
            path: "verify_email/:email_code",
            element: <VerificateEmail />,
        },
        /*{
            path: 'reset_password',
            element: <ResetPassword />,
        },
        {
            path: 'reset_password/:code',
            element: <ChangePassword />,
        },*/
    ]
}

export default authRouter;
