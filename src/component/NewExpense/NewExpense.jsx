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

	const {chnageVisibibility} = props ;



	return (
		<div className='new-expense'>
			<ExpenseForm chnageVisibibility={chnageVisibibility}  onSaveExpenseData={saveExpenseDataHanlder} />
		</div>
	);
};

export default newExpense;
