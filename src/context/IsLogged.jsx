import { createContext, useContext, useState } from "react";

const isLoggedContext = createContext();

export const LoggedProvider = ({children}) => {
    const [ isLogged, setIsLogged ] = useState(false)

    const login = () => {
        setIsLogged(true)
    };

    const logout = () => {
        setIsLogged(false)
    }

    return (
        <isLoggedContext.Provider value={{isLogged, login, logout}}>
            {children}
        </isLoggedContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(isLoggedContext);
}