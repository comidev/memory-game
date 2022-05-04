import styled from "@emotion/styled";
import { Spinner } from "components/Spinner";
import Table from "components/Table";
import useSimbolos from "hooks/useSimbolos";
import useUser from "hooks/useUser";
import useUsers from "hooks/useUsers";
import { useEffect, useState } from "react";
import getTimeInMin from "services/getTimeInMin";
import { getUsers, register } from "services/UsuarioService";
import { COLOR, CONTAINER, H1, H2 } from "styles";

const ResultsContainer = styled.section`
    ${CONTAINER}
`;

const Username = styled.span`
    color: ${COLOR.PRIMARY};
`;

export default function Results() {
    const { users, setUsers } = useUsers();
    const { errores, time } = useSimbolos();
    const { username } = useUser();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        register({ username, errores, time }).then((res) => {
            if (res) {
                getUsers()
                    .then((res) => {
                        setUsers(res);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } else {
                setLoading(false);
            }
        });
    }, [username, errores, setUsers, time]);

    return (
        <ResultsContainer>
            {loading ? (
                <Spinner width="100%" />
            ) : (
                <>
                    <H1>
                        ¡Felicidades <Username>#{username}</Username>!
                    </H1>
                    <H2>
                        <Username>Lo hiciste en {getTimeInMin(time)} min</Username>{" "}
                        con {errores} errores
                    </H2>
                    <Table list={users} />
                </>
            )}
        </ResultsContainer>
    );
}
