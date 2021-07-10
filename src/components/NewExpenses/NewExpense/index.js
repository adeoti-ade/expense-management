import React, { useState } from "react";
import ExpenseForm from "../ExpenseForm";
import "./style.css";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const onSaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random(),
		};
		props.onRetrieveExpenseData(expenseData);
		setIsEditing(false); // set editing mode to false after saving data
	};

	const startEditingHandler = () => {
		setIsEditing(true); // setting editing to true if this function is called
	};

	const stopEditingHandler = () => {
		setIsEditing(false); // setting editing to false if this function is called
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button> // onclick of this button, display ediing form
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={onSaveExpenseDataHandler}
					onCancel={stopEditingHandler} // on 
				/>
			)}
		</div>
	);
};

export default NewExpense;
