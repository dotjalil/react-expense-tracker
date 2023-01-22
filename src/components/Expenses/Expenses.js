import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('');

  // When the filter drop-down is set to a different year
  const handleFilterByYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onFilterByYear={handleFilterByYear} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
