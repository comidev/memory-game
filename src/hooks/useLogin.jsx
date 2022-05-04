import useUser from "hooks/useUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { existsUsername } from "services/UsuarioService";

export default function useLogin() {
    const { setUsername } = useUser();
    const [errorUsername, setErrorUsername] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const login = (username) => {
        const MIN_LENGTH = 3;
        if (username && username.length >= MIN_LENGTH) {
            setLoading(true);
            existsUsername(username).then((exists) => {
                if (!exists) {
                    setErrorUsername("");
                    setUsername(username);
                    navigate("/game");
                } else {
                    setErrorUsername("Username existente :(");
                }
                setLoading(false);
            });
        } else {
            setErrorUsername(`Mínimo ${MIN_LENGTH} caracteres`);
        }
    };

    return { setUsername, login, errorUsername, loading };
}
