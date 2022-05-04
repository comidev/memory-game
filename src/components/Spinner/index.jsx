import styled from "@emotion/styled";
import { BREAK_POINTS } from "styles";

export const Spinner = styled.div`
    aspect-ratio: 1;
    width: ${({ width }) => `${width}%`};
    max-width: 8rem;
    margin: auto;
    border-radius: 50%;
    border: 7px solid #48e;
    border-left-color: transparent;
    animation: spinner 1s linear infinite;

    @media screen and (max-width: ${BREAK_POINTS.MOBILE}) {
        border-width: 5px;
    }

    @keyframes spinner {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
