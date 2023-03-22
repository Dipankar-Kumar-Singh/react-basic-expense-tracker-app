import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
	const { expenses } = props;
	const { selectedYear } = props;

	const filteredExpenses = expenses.filter(
		(exp) => exp.date.getFullYear() === Number(selectedYear)
	);

	const expensesComponentCollection = filteredExpenses.map((e) => (
		<ExpenseItem key={Math.random()}  {...e} />
	));
	
	return expensesComponentCollection;
}
