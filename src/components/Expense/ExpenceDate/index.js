import './style.css'
const ExpenseDate = props => {
    const {expenseDate} = props;
    const month = expenseDate.toLocaleString("en-US", {"month": "long"});
    const year = expenseDate.getFullYear();
    const day = expenseDate.toLocaleString("en-US", {"day": "2-digit"});
	return (
		<div className="expense-date">
			<div className="expense-date__month"> {month} </div> 
            <div className="expense-date__year"> {year} </div> 
            <div className="expense-date__day"> {day} </div>{" "}
		</div>
	);
};

export default ExpenseDate;
