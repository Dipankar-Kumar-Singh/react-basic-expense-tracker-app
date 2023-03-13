import './style/ExpenseForm.css';

const ExpenseForm = () => {
	return (
		<form>
			<div className='new-expense__control'>
				<div className='new-expense__control'>
					<label> Title </label>
					<input type='text' />
				</div>

				<div className='new-expense__control'>
					<label> Amount </label>
					<input type='number' />
				</div>

				<div className='new-expense__control'>
					<label> Date </label>
					<input type='date' />
				</div>
			</div>

			<div className='new-expense__action'>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
