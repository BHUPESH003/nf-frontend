import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import Layout from "src/layout";
import Login from "src/pages/login";
import Home from "src/pages/home";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },

    {
        path: "/",
        element: (
            <PrivateRoute>
                <Layout />
            </PrivateRoute>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export default router;
