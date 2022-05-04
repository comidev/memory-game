import styled from "@emotion/styled";
import { COLOR } from "styles";

export const Tabla = styled.table`
    border-collapse: collapse;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    max-width: max-content;
    height: max-content;
    margin: auto;
`;

export const TablaHead = styled.thead`
    background-color: ${COLOR.BLACK};
    color: ${COLOR.WHITE};
`;
export const TablaBody = styled.tbody`
    background-color: ${COLOR.WHITE};
    color: ${COLOR.BLACK};
`;

export const TablaItem = styled.tr`
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    @media screen and (max-width: 320px) {
        font-size: 13px;
    }
`;

export const TablaHeadDato = styled.th`
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0.6rem 0.2rem;
`;

export const TablaBodyDato = styled.td`
    border: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 0.6rem 0;
`;
