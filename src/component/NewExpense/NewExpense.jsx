import ExpenseForm from './ExpenseForm.jsx';
import './style/NewExpense.css';


const newExpense = (props) => {

	const saveExpenseDataHanlder = (enteredExpenseData) => {
		
		const expenseData = { 
			...enteredExpenseData , 
			id : Math.random().toString() 
		}
		props.onAddExpense(expenseData) ;
	}

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} />
		</div>
	);
};

export default newExpense;
