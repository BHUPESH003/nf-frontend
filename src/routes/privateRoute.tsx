import { useAtomValue } from "jotai";
import { JSX } from "react";
import { Navigate } from "react-router-dom";
import { authStateAtom } from "src/store/auth";

function PrivateRoute(props: { children: JSX.Element }) {
    const authAtomValue = useAtomValue(authStateAtom);
    if (!authAtomValue?.isAuthenticated) {
        return <Navigate to={"/login"} />;
    }

    return props.children;
}

export default PrivateRoute;
