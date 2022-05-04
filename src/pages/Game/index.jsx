import ListOfSimbolos from "components/ListOfSimbolos";
import { GameContainer, Simbolos } from "./styles";

export default function Game() {
    return (
        <GameContainer>
            <Simbolos>
                <ListOfSimbolos />
            </Simbolos>
        </GameContainer>
    );
}
