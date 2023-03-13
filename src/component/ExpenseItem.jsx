import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
	const { title, amount } = props;
	const clickHandler = function() {
		console.log("Clicked !!!!") ;
 	}
	return (
		<div className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
			<button onClick={clickHandler} > Click Me </button>
		</div>
	); 
}

export default ExpenseItem;
