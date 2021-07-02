import React, { useState } from "react";
import "./style.css";

const ExpenseForm = () => {
	const [enteredExpenseTitle, setEnteredExpenseTitle] = useState("");
	const [enteredExpenseAmount, setEnteredExpenseAmount] = useState("");
	const [enteredExpenseDate, setEnteredExpenseDate] = useState("");
	const handleTitleChange = (e) => {
		setEnteredExpenseTitle(e.target.value);
	};
	const handleAmountChange = (e) => {
		setEnteredExpenseAmount(e.target.value);
	};
	const handleDateChange = (e) => {
		setEnteredExpenseDate(e.target.value);
	};

    const handleSubmit = e => {
        e.preventDefault();
        const expenseData = {
            expenseTitle: enteredExpenseTitle,
            expenseAmount: enteredExpenseAmount,
            expenseDate: new Date(enteredExpenseDate)
        }
        setEnteredExpenseTitle("");
        setEnteredExpenseAmount("");
        setEnteredExpenseDate("");
        console.log(expenseData)
    };
	return (
		<form action="" onSubmit={handleSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						name=""
						id=""
						onChange={handleTitleChange}
						value={enteredExpenseTitle}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						name=""
						id=""
						required
						min="0.01"
						step="0.01"
						value={enteredExpenseAmount}
						onChange={handleAmountChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						name=""
						id=""
						required
						min="2019-01-01"
						max="2022-12-31"
                        value={enteredExpenseDate}
						onChange={handleDateChange}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
