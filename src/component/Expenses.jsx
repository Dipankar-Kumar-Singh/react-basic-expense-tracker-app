import ExpenseItem from './ExpenseItem';
import './Expenses.css';

export default function Expenses(props) {
	let { expenses } = props;
	const { selectedYear } = props;

	expenses = expenses.filter(
		(exp) => exp.date.getFullYear() === Number(selectedYear)
	);

	const expensesComponentCollection = expenses.map((e) => (
		<ExpenseItem key={Math.random()} items={expenses} {...e} />
	));

	return expensesComponentCollection;
}
