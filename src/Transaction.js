import React from 'react'

const Transaction = ({ transaction }) => {

    const sign = transaction.amount > 0 ? '+' : '-'; 

    return (
        <li>
            <span>{transaction.description}</span>
            <span>{sign}Rs.{Math.abs(transaction.amount)}</span>
        </li>
    )
}

export default Transaction
