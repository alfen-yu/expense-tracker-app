import React, {useContext} from 'react';
import { GlobalContext } from './GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {

    // Transactions destructured from GlobalContext variable i.e : GlobalContext -> initialTransactions -> transactions
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h4>History</h4> 
            <hr/>

            <ul className="transaction-list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.key} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList;