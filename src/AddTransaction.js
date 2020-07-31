import React from 'react';

const AddTransaction = () => {
    return (
        <div>

            <div className="add-transaction">
                <h4>Create new Transaction</h4>
                <img src={require("./add_button.png")} id="add-image" />
            </div>
            <hr/> 

            <form  className="transaction-form">
                <label>
                    Enter Description <br/>
                    <input type="text" required/>
                </label>
                <br/>

                <label>
                    Enter Amount <br/>
                    <input type="text" required/>
                </label>
                <br/>

                <input type = "submit" value="Add Transaction" />

            </form>
            <hr/>
        </div>
    )
}

export default AddTransaction;