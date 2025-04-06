import { useAtom } from "jotai";
import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { userAtom } from "src/store";

function PrivateRoute(props: { children: JSX.Element }) {
    const isAuthenticated = useAtom(userAtom)[0].id !== "";
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }

    return props.children;
}

export default PrivateRoute;
