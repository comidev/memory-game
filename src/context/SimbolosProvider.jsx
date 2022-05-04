import { SIMBOLOS } from "data";
import { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export function SimbolosProvider({ children }) {
    const [simbolos, setSimbolos] = useState([]);
    const [errores, setErrores] = useState(0);
    const [time, setTime] = useState();
    const navigate = useNavigate();

    const incorrecto = useCallback(() => setErrores((prev) => prev + 1), []);

    const exists = useCallback(
        (id) => simbolos.some((item) => item.id === id),
        [simbolos]
    );

    const addSimbolo = useCallback(
        (simbolo, timeStart) => {
            setSimbolos((prev) => prev.concat(simbolo));
            const isFull = simbolos.length + 1 === SIMBOLOS.length / 2;
            if (isFull) {
                const timeEnd = Date.now();
                const timeSeg = (timeEnd - timeStart) / 1000;
                setTime(timeSeg);
                navigate("/results");
            }
        },
        [simbolos, navigate]
    );

    return (
        <Context.Provider
            value={{
                simbolos,
                errores,
                incorrecto,
                time,
                setTime,
                addSimbolo,
                exists,
            }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
