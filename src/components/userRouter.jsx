import AllUsers from "./academy/AllUsers";
import HomeAcademy from "./academy/HomeAcademy";
import MePage from "./academy/MePage";
import AdminCategoria from "./academy/superAdmin/AdminCategoria";
import AdminRole from "./academy/superAdmin/AdminRole";
import ProtectedRoute from "./protectedRouter/ProtectedRoute";

const userRouter = {
    path: "academy",
    element: <ProtectedRoute><HomeAcademy/></ProtectedRoute>,
    children: [
        {
            path: "home",
            element: <AllUsers />,
        },
        {
            path: "me",
            element: <MePage />,
        },
        {
            path:"admin_roles",
            element: <AdminRole/>
        },
        {
            path:"admin_Categorias",
            element: <AdminCategoria/>
        }
    ]
}

export default userRouter;