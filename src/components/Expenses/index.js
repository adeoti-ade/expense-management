import React, { useState } from "react";
import ExpenseList from "../ExpenseList";
import ExpensesFilter from "../ExpenseFilter";
import Card from "../Card";
import "./style.css";

const Expenses = (props) => {
	const expenses = props.items;
	const [filteredYear, setFilteredYear] = useState("2020");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpenseList items={filteredExpenses} />
			</Card>
		</li>
	);
};

export default Expenses;
