import { createContext, useContext, useState } from "react";

const userInfoContext = createContext();

export const TrackUser = ({children}) => {
    const [ userInfo, setInfo ] = useState(null)

    const updateUserInfo = (id) => {
        setInfo(id)
    };


    return (
        <userInfoContext.Provider value={{userInfo, updateUserInfo}}>
            {children}
        </userInfoContext.Provider>
    );
};

export const useUserInfo = () => {
    return useContext(userInfoContext);
}