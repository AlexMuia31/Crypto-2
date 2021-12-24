import React, { createContext, useContext, useState, useEffect } from 'react'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState('KES')
    const [symbol, setSymbol] = useState('KSh')

    useEffect(() => {
        if (currency === 'KES') setSymbol('KSh')
        else if (currency === 'USD') setSymbol('$')
    }, [currency])

    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency }}>
            {children}
        </Crypto.Provider>
    )
}

export default CryptoContext


export const CryptoState = () => {
    return useContext(Crypto);
}