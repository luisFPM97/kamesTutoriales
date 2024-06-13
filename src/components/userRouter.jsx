import HomeAcademy from "./academy/HomeAcademy";
import Home from "./home/Home";

const userRouter = {
    path: "/academy",
    element: <HomeAcademy/>,
    children: [
        {
            path: "home",
            element: <Home />,
        },
    ]
}

export default userRouter;