import React, { createContext } from 'react'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
    return (
        <Crypto.Provider>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext
