import { useContext } from "react";
import SimbolosContext from "context/SimbolosProvider";

export default function useSimbolos() {
    const {
        simbolos,
        setSimbolos,
        simboloPrev,
        setSimboloPrev,
        errores,
        incorrecto,
        time,
        setTime,
        verificar,
    } = useContext(SimbolosContext);
    return {
        simbolos,
        setSimbolos,
        simboloPrev,
        setSimboloPrev,
        errores,
        incorrecto,
        time,
        setTime,
        verificar,
    };
}
