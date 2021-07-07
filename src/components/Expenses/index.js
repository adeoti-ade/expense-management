import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import ExpensesFilter from "../ExpenseFilter";
import Card from "../Card";
import './style.css'

const Expenses = props => {
	const expenses = props.items
	const [filteredYear, setFilteredYear] = useState('2020');

	const filterChangeHandler = selectedYear => {
	  setFilteredYear(selectedYear);
	};
    return ( 
        <Card className="expenses">
			<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			{
				expenses.map(expense => 
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>)
			}
        </Card>
     );
}
 
export default Expenses;