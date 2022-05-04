import { createContext, useState } from "react";

const Context = createContext();

export function UserProvider({ children }) {
    const [username, setUsername] = useState();
    return (
        <Context.Provider value={{ username, setUsername }}>
            {children}
        </Context.Provider>
    );
}

export default Context;
