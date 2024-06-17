import {
    createBrowserRouter,
    Navigate,
    useLocation
} from "react-router-dom";
import authRouter from './components/authRouter'
import userRouter from './components/userRouter'
import allRouter from "./components/allRouter";



const router = createBrowserRouter([
    authRouter,
    userRouter,
    allRouter
]);

export default router;