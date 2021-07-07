import React from 'react';
import ExpenseForm from '../ExpenseForm';
import './style.css'

const NewExpense = props => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random()
        };
        // console.log(expenseData)
        props.onRetrieveExpenseData(expenseData);
    }
    
    return ( 
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
        </div>
     );
}
 
export default NewExpense;