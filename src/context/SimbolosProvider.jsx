import { SIMBOLOS } from "data";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext();

export function SimbolosProvider({ children }) {
    const [simbolos, setSimbolos] = useState(SIMBOLOS);
    const [simboloPrev, setSimboloPrev] = useState(null);
    const [errores, setErrores] = useState(0);
    const [time, setTime] = useState();
    const navigate = useNavigate();

    const incorrecto = () => setErrores((prev) => prev + 1);

    const verificar = (timeStart) => {
        const fin = simbolos.every((item) => item.show);
        if (fin) {
            const timeEnd = Date.now();
            const timeSeg = (timeEnd - timeStart) / 1000;
            setTime(timeSeg);
            navigate("/results");
        }
    };

    return (
        <Context.Provider
            value={{
                simbolos,
                setSimbolos,
                simboloPrev,
                setSimboloPrev,
                errores,
                incorrecto,
                time,
                setTime,
                verificar,
            }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
