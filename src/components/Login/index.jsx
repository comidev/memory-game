import { Button } from "components/Button";
import { Spinner } from "components/Spinner";
import useLogin from "hooks/useLogin";

import { Error, Input, Label, LoginContainer, Texto } from "./styles";

export default function Login() {
    const { login, errorUsername, loading } = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        login(username);
    };

    return (
        <LoginContainer onSubmit={handleSubmit}>
            <Texto>Ingrese su username</Texto>
            <Label>
                <Input placeholder="Username..." />
                {errorUsername && <Error>{errorUsername}</Error>}
            </Label>
            {loading ? <Spinner width="20" /> : <Button type="submit">Jugar</Button>}
        </LoginContainer>
    );
}
