import useUser from "hooks/useUser";
import { Navigate } from "react-router-dom";

export default function UserProtected({ children }) {
    const { username } = useUser();
    return !username ? <Navigate to="/home" replace /> : children;
}
