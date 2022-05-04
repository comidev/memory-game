import styled from "@emotion/styled";
import { COLOR } from "styles";

export const SimboloContainer = styled.div`
    width: 150px;
    height: 217.5px;
    margin: auto;
    border-radius: 0.6rem;
    overflow: hidden;
    outline: 3px solid;
    outline-color: ${({ correct }) =>
        correct
            ? correct === "verdadero"
                ? COLOR.SUCCESS
                : COLOR.RED
            : "transparent"};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

    transition: transform ease 0.3s;

    @media (hover: hover) {
        &:hover {
            transform: translateY(-5px);
        }
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
