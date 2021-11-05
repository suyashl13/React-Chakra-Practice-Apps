import React, { createContext, useState } from 'react'

export const RandomUserContext = createContext();

export default function RandomUserContextProvider({ children }) {

    const [randomUser, setRandomUser] = useState('Demo State')

    return (
        <RandomUserContext.Provider value={{ randomUser, setRandomUser }}>
            {children}
        </RandomUserContext.Provider>
    )
}
