import './ExpenseDate.css';

function ExpenseDate(props) {
	const dateStr = props.date.toLocaleString('en-US');

	return (
		<div className='expense-date'>
			<div className='date__month'>{dateStr}</div>
		</div>
	);
}

export default ExpenseDate;
