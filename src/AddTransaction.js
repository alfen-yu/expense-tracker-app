import React, {useState, useContext} from 'react';
import {GlobalContext} from './GlobalState';

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmission = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,   
            amount: +amount
        }

        addTransaction(newTransaction);
    }


    return (
        <div>

            <div className="add-transaction">
                <h4>Create new Transaction</h4>
                <img src={require("./add_button.png")} id="add-image" alt="Add Button"/>
            </div>
            <hr/> 

            <form className="transaction-form" onSubmit={onSubmission}>
                <label>
                    Enter Description <br/>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} required/>
                </label>
                <br/>

                <label>
                    Enter Amount <br/>
                    <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
                </label>
                <br/>

                <input type = "submit" value="Add Transaction" id="submit-button" />

            </form>
            <hr/>
        </div>
    )
}

export default AddTransaction;