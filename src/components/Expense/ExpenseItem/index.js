import React, { useState } from 'react'

import './style.css';
import ExpenseDate from '../ExpenceDate';
import Card from '../UI/Card';
const ExpenseItem = props => {
    const {date:expenseDate, amount:expensePrice, title:expenseTitle} = props;

    return ( 
        <Card className="expense-item">
            <ExpenseDate expenseDate={expenseDate}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <p className="expense-item__price">${expensePrice}</p>
            </div>
        </Card>
     );
}
 
export default ExpenseItem;