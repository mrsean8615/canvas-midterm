import { createContext, useContext, useState } from "react";
import { useUserInfo } from "./TrackUser";

const isLoggedContext = createContext();

export const LoggedProvider = ({children}) => {
    const { userInfo, updateUserInfo } = useUserInfo();
    const [ isLogged, setIsLogged ] = useState(false)

    const login = () => {
        setIsLogged(true)
    };

    const logout = () => {
        setIsLogged(false)
        updateUserInfo(undefined)
        console.log(userInfo)

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