import ExpenseForm from './ExpenseForm.jsx';
import './style/NewExpense.css';

const newExpense = () => {
	return (
		<div className='new-expense'>
			<ExpenseForm />
		</div>
	);
};

export default newExpense;
