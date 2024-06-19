import { createContext, useState, useEffect } from "react";



export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [chosenUser, setChosenUser] = useState(null)

    return (
        <UserContext.Provider value={{chosenUser, setChosenUser}}>
            {children}
        </UserContext.Provider>
    )
}
