import { useState } from 'react';
import './style/ExpenseForm.css';

const ExpenseForm = ({onSaveExpenseData , chnageVisibibility }) => {

	const [ enteredTitle , setEnteredTitle ] = useState('') ;
	const [ enteredAmount , setEnteredAmount] = useState('') ;
	const [ enteredDate , setEnteredDate] = useState('') ;


	const titleChangeHandler = (event) => {
		// console.dir(event.target.value) ;
		setEnteredTitle( () =>   event.target.value) ;
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(() => event.target.value) ;
	} ;

	const dateChangeHandler = (event) => {
		setEnteredDate(() => event.target.value) ;
	} ;

	const submitHandler = function(e){
		e.preventDefault() ;

		const expenseData = {
			title :  enteredTitle , 
			amount : enteredAmount , 
			date : new Date(enteredDate) 
		}

		onSaveExpenseData(expenseData) ;

		setEnteredTitle(() => '');
		setEnteredAmount(() => '');
		setEnteredDate(() => '');

	}

	return (
		<form onSubmit={submitHandler} >
			<div className='new-expense__control'>
				<div className='new-expense__control'>
					<label> Title </label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>

				<div className='new-expense__control'>
					<label> Amount </label>
					<input type='number' value={enteredAmount} onChange={amountChangeHandler} />
				</div>

				<div className='new-expense__control'>
					<label> Date </label>
					<input type='date' value={enteredDate}   onChange={dateChangeHandler} />
				</div>
			</div>

			<div className='new-expense__action'>
				<button type='button' onClick = { chnageVisibibility }>Cancel</button>
				<button type='submit'  onSubmit={chnageVisibibility}>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
