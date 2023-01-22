import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const getNewExpenseData = (data) => {
    props.onAddExpense({
      ...data,
      id: Math.random().toString(),
    });
  };

  const showForm = () => {
    setIsFormVisible(true);
  };

  const hideForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-expense">
      {!isFormVisible && <button onClick={showForm}>Add New Expense</button>}
      {isFormVisible && (
        <ExpenseForm
          onSubmitExpenseForm={getNewExpenseData}
          onHideForm={hideForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
