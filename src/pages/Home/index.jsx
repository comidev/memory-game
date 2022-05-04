import styled from "@emotion/styled";
import Login from "components/Login";
import { CONTAINER } from "styles";

const HomeContainer = styled.section`
    ${CONTAINER}
`;

export default function Home() {
    return (
        <HomeContainer>
            <Login />
        </HomeContainer>
    );
}
