import React, { useState } from 'react'

import './style.css';
import ExpenseDate from '../ExpenceDate';
import Card from '../Card';
const ExpenseItem = props => {
    const {date:expenseDate, amount:expensePrice} = props;
    const [expenseTitle, setExpenseTitle] = useState(props.title);

    const handleClick = () => {
        setExpenseTitle("Updated")
    }

    return ( 
        <Card className="expense-item">
            <ExpenseDate expenseDate={expenseDate}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <p className="expense-item__price">${expensePrice}</p>
                <button onClick={handleClick}> change title</button>
            </div>
        </Card>
     );
}
 
export default ExpenseItem;