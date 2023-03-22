// import ExpenseItem from './component/ExpenseItem';
import './component/Expenses.css';
import NewExpense from './component/NewExpense/NewExpense';
import ExpensesFilter from './component/ExpenseFilter/ExpensesFilter';
import Expenses from './component/Expenses';
import { useState } from 'react';

function App() {
	const expenses_data = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'New TV',
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	const [expenseList, setExpenseList] = useState(expenses_data);

	const addExpenseHandler = function (expense) {
		setExpenseList((previousState) =>{ 
			return [expense ,  ...previousState ] ;
		});
	};

	const [year, setYear] = useState('2020');

	const expenseFilterChangeHandler = (targetYear) => {
		setYear(targetYear);
	};

	return (
		<div className='expenses'>
			<NewExpense onAddExpense={addExpenseHandler} />
			<ExpensesFilter onExpenseFilerChnage={expenseFilterChangeHandler} />
			<Expenses expenses={expenseList} selectedYear={year} />
		</div>
	);
}

export default App;
