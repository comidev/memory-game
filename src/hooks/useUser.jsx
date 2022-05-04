import { useContext } from "react";
import UserContext from "context/UserProvider";

export default function useUser() {
    const { username, setUsername } = useContext(UserContext);
    return { username, setUsername };
}
