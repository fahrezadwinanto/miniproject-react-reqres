import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserDetail from "../pages/UserDetail";
import ProtectedRoute from "./ProtectedRoute";


export const routeList = [
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/user-detail/:id",
        element: (
            <ProtectedRoute>
                <UserDetail />
            </ProtectedRoute>
        ),
    },
];