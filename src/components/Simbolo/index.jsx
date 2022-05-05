import { Img, SimboloContainer } from "./styles";
import oculto from "images/oculto.webp";
import { useMemo, useState, memo, useCallback } from "react";
import useSimbolos from "hooks/useSimbolos";

function Simbolo({ simbolo, index, simboloPrev, setSimboloPrev }) {
    const { incorrecto, addSimbolo, exists } = useSimbolos();
    const timeStart = useMemo(() => Date.now(), []);
    const [showImg, setShowImg] = useState(false);
    const [correct, setCorrect] = useState("");

    const handleClick = useCallback(() => {
        // Si aún no están en el arreglo
        if (!exists(simbolo.id)) {
            // Si ya se ha marcado algo
            if (simboloPrev) {
                // Si eso no es el mismo
                if (simboloPrev.index !== index) {
                    setShowImg(true);
                    setTimeout(() => {
                        // Si es la pareja
                        if (simboloPrev.id === simbolo.id) {
                            // Color verde
                            setCorrect("verdadero");
                            simboloPrev.setCorrect("verdadero");
                            setTimeout(() => {
                                // Quitamos color
                                setCorrect("");
                                simboloPrev.setCorrect("");
                                // Agregamos
                                addSimbolo(simbolo, timeStart);
                            }, 500);
                        } else {
                            // Color rojo
                            setCorrect("falso");
                            simboloPrev.setCorrect("falso");
                            setTimeout(() => {
                                incorrecto();
                                // Quitamos color
                                setCorrect("");
                                simboloPrev.setCorrect("");
                                // Ocultamos imagen
                                setShowImg(false);
                                simboloPrev.setShowImg(false);
                            }, 500);
                        }
                        setSimboloPrev(null);
                    }, 700);
                }
            } else {
                setShowImg(true);
                setSimboloPrev({ id: simbolo.id, index, setShowImg, setCorrect });
            }
        }
    }, [
        incorrecto,
        exists,
        addSimbolo,
        index,
        setCorrect,
        setShowImg,
        setSimboloPrev,
        simbolo,
        timeStart,
        simboloPrev,
    ]);

    return (
        <SimboloContainer onClick={handleClick} correct={correct}>
            <Img src={showImg ? simbolo.img : oculto} />
        </SimboloContainer>
    );
}
export default memo(Simbolo);

/*
{showImg ? <Img src={simbolo.img} /> : <Img src={oculto} />}
<Img src={showImg ? simbolo.img : oculto} />
*/
