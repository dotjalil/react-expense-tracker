import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const getNewExpenseData = (data) => {
    props.onAddExpense({
      ...data,
      id: Math.random().toString(),
    });
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpenseForm={getNewExpenseData} />
    </div>
  );
}

export default NewExpense;
