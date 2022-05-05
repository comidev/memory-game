import styled from "@emotion/styled";
import { COLOR } from "styles";

export const SimboloContainer = styled.div`
    position: relative;
    /* z-index: 3; */
    overflow: hidden;

    background-color: transparent;
    width: 150px;
    height: 217.5px;
    margin: auto;
    border-radius: 0.6rem;

    outline: 3px solid;
    outline-color: ${({ correct }) =>
        correct
            ? correct === "verdadero"
                ? COLOR.SUCCESS
                : COLOR.RED
            : "transparent"};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const IMG = `
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-select: none;
    position: absolute;
`;

export const ImgAbierto = styled.img`
    ${IMG}
    z-index: 0;
`;

export const ImgOculto = styled.img`
    ${IMG}
    opacity: ${({ opacity }) => opacity};
    left: 1;
`;
