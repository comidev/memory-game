import styled from "@emotion/styled";
import { COLOR } from "styles";

export const Button = styled.button`
    display: inline-block;
    background-color: ${({ bg }) => (bg ? bg : COLOR.BLACK)};
    color: ${COLOR.WHITE};
    padding: 1rem 1.2rem;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 600;
    max-width: max-content;
    margin: auto;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    transition-property: transform, color, background-color;
    transition: 0.3s ease;

    @media (hover: hover) {
        &:hover {
            cursor: pointer;
            color: ${COLOR.BLACK};
            background-color: ${COLOR.WHITE};
            transform: translateY(-4px);
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
        }
    }

    &:active {
        color: ${COLOR.BLACK};
        background-color: ${COLOR.WHITE};
    }
`;
