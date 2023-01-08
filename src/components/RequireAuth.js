import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
import { useLocation } from "react-router-dom";


const RequireAuth = ({ children }) => {
    const location = useLocation();
    const auth = useAuth();

    if (!auth.user) {
        return <Navigate path to ='/login' state ={{ path: location.pathname }} />
    }

    return children;
}

export default RequireAuth;