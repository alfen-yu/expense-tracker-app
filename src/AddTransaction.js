import React, {useState} from 'react';

const AddTransaction = () => {

    let [text, setText] = useState('');
    let [amount, setAmount] = useState(0);

    return (
        <div>

            <div className="add-transaction">
                <h4>Create new Transaction</h4>
                <img src={require("./add_button.png")} id="add-image" alt="Add Button"/>
            </div>
            <hr/> 

            <form  className="transaction-form">
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