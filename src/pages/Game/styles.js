import styled from "@emotion/styled";
import { CONTAINER } from "styles";

export const GameContainer = styled.section`
    ${CONTAINER}
`;

export const Simbolos = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    padding-bottom: 1rem;
`;
