import React from 'react';

const TransactionList = () => {
    return (
        <div>
            <h4>History</h4>
            <hr/>

            <ul className="transaction-list">
                <li>
                    <span>Cash</span>
                    <span>+500</span>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList;