import { memo, useState } from "react";
import Simbolo from "components/Simbolo";
import { SIMBOLOS } from "data";

function ListOfSimbolos() {
    const [simboloPrev, setSimboloPrev] = useState(null);
    return (
        <>
            {SIMBOLOS.map((simbolo, index) => (
                <Simbolo
                    key={index}
                    simbolo={simbolo}
                    index={index}
                    simboloPrev={simboloPrev}
                    setSimboloPrev={setSimboloPrev}
                />
            ))}
        </>
    );
}
export default memo(ListOfSimbolos);
