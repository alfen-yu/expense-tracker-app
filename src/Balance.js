import React, {useContext} from 'react';
import { GlobalContext } from './GlobalState';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const reducer = (accumulator, currentValue) => accumulator += currentValue;
    const total_amounts = amounts.reduce(reducer, 0);

    return (
        <div>
            <h4>Current Balance <br/> Rs. {total_amounts} </h4>
        </div>        
    )
}

export default Balance;