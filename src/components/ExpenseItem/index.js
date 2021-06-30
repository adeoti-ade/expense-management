import './style.css';
import ExpenseDate from '../ExpenceDate';
const ExpenseItem = props => {

    const {title:expenseTitle, date:expenseDate, amount:expensePrice} = props;
    return ( 
        <div className="expense-item">
            <ExpenseDate expenseDate={expenseDate}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <p className="expense-item__price">${expensePrice}</p>
            </div>
        </div>
     );
}
 
export default ExpenseItem;