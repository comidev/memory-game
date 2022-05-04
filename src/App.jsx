import styled from "@emotion/styled";
import { COLOR, Main } from "styles";
import { Outlet } from "react-router-dom";
import { SimbolosProvider } from "context/SimbolosProvider";

const AppStyle = styled.div`
    min-height: 100vh;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.WHITE_1};
`;

export default function App() {
    return (
        <AppStyle>
            <Main>
                <SimbolosProvider>
                    <Outlet />
                </SimbolosProvider>
            </Main>
        </AppStyle>
    );
}
