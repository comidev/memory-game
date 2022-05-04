import { useContext } from "react";
import SimbolosContext from "context/SimbolosProvider";

export default function useSimbolos() {
    const { simbolos, errores, incorrecto, time, setTime, addSimbolo, exists } =
        useContext(SimbolosContext);
    return {
        simbolos,
        errores,
        incorrecto,
        time,
        setTime,
        addSimbolo,
        exists,
    };
}
