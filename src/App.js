import React from 'react';
import Header from './Header';
import './App.css';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <AddTransaction/>
      <TransactionList/>
      </div>
    </GlobalProvider>
  )
}

export default App;
