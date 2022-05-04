import { Img, SimboloContainer } from "./styles";
import oculto from "images/oculto.webp";
import { useMemo, useState } from "react";
import useSimbolos from "hooks/useSimbolos";

const getHermano = (simbList, id) =>
    simbList.filter((simb) => simb.id === id + 10 || simb.id === id - 10)[0];

export default function Simbolo({ simbolo, index }) {
    const {
        simbolos,
        setSimbolos,
        simboloPrev,
        setSimboloPrev,
        incorrecto,
        verificar,
    } = useSimbolos();
    const [showImg, setShowImg] = useState(simbolo.show);
    const [correct, setCorrect] = useState("");
    const timeStart = useMemo(() => Date.now(), []);

    const handleClick = () => {
        const hermano = getHermano(simbolos, simbolo.id);
        if (!(showImg && hermano.show)) {
            setShowImg(true);
            if (simboloPrev && simboloPrev.simbolo !== simbolo) {
                if (simboloPrev.simbolo === hermano) {
                    setCorrect("verdadero");
                    simboloPrev.setCorrect("verdadero");

                    const hermanoIndex = simbolos.indexOf(hermano);
                    simbolos[hermanoIndex].show = true;
                    simbolos[index].show = true;
                    setTimeout(() => {
                        setCorrect("");
                        simboloPrev.setCorrect("");

                        simboloPrev.setShowImg(true);

                        setSimbolos(simbolos);
                        verificar(timeStart);
                    }, 1000);
                } else {
                    setCorrect("falso");
                    simboloPrev.setCorrect("falso");

                    setTimeout(() => {
                        incorrecto();

                        setCorrect("");
                        simboloPrev.setCorrect("");

                        simboloPrev.setShowImg(false);
                        setShowImg(false);
                    }, 1000);
                }
                setSimboloPrev(null);
            } else {
                setSimboloPrev({ simbolo, setShowImg, setCorrect });
            }
        }
    };

    return (
        <SimboloContainer onClick={handleClick} correct={correct}>
            <Img src={showImg ? simbolo.img : oculto} />
        </SimboloContainer>
    );
}
