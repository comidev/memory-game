import Simbolo from "components/Simbolo";
import useSimbolos from "hooks/useSimbolos";
import { GameContainer, Simbolos } from "./styles";

export default function Game() {
    const { simbolos } = useSimbolos();

    return (
        <GameContainer>
            <Simbolos>
                {simbolos.map((simbolo, index) => (
                    <Simbolo key={index} simbolo={simbolo} index={index} />
                ))}
            </Simbolos>
        </GameContainer>
    );
}
