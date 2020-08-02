import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialTransactions = {
    transactions: [ ]
}



// Created Context and passed initial state of transactions
export const GlobalContext = createContext(initialTransactions);

// Provider Component Wrapper for passing Data 

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialTransactions)

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            addTransaction,
            }}>
            {children}
        </GlobalContext.Provider>
    );
}