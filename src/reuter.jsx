import {
    createBrowserRouter,
    Navigate
} from "react-router-dom";
import authRouter from "./components/authRouter";
import userRouter from "./components/userRouter";


const router = createBrowserRouter([
    
    userRouter,
    {
        path: "*",
        element: <Navigate to="/" />
    },
]);

export default router;