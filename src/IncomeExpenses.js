import React, {useContext} from 'react';
import { GlobalContext } from './GlobalState';

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const reducer = (accumulator, currentValue) => accumulator += currentValue;
    const income = amounts.filter(item => item > 0).reduce(reducer, 0);
    const expenses = (amounts.filter(item => item < 0).reduce(reducer, 0) * -1)

    return (
        <div className="expense-container">
           <h4>Income <br/> Rs. {income}</h4> 
           <h4>Expense <br/> Rs. {expenses}</h4> 
        </div>
    )
}

export default IncomeExpenses;