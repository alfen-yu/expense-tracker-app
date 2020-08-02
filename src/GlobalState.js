import React, {createContext, useReducer} from 'react';

//Initial State
const initialTransactions = [
    {amount: 500, description: "Cash"},
    {amount: -100, description: "Loan"},
    {amount: 5000, description: "Salary"}
]


// Created Context and passed initial state of transactions
export const GlobalContext = createContext(initialTransactions);

// Provider Component Wrapper for passing Data 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialTransactions)

    return (
        <GlobalContext.Provider value={{transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    );
}