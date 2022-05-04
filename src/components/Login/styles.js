import styled from "@emotion/styled";
import { COLOR } from "styles";

export const LoginContainer = styled.form`
    display: flex;
    flex-direction: column;
    max-width: max-content;
    margin: auto;
    background-color: ${COLOR.WHITE};
    border-radius: 1rem;
    padding: 0 2rem 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

export const Label = styled.label`
    position: relative;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 2rem;
`;

export const Error = styled.span`
    position: absolute;
    top: 2.6rem;
    right: 0.1rem;
    background-color: ${COLOR.PRIMARY};
    color: ${COLOR.WHITE};
    padding: 0.1rem 0.4rem;
    border-radius: 0.4rem;
    font-size: 13px;
`;

export const Input = styled.input`
    font-size: 18px;
    font-weight: 500;
    width: 100%;

    padding: 0.5rem 0.8rem;
    border-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Texto = styled.p`
    text-align: center;
    font-size: 30px;
`;
