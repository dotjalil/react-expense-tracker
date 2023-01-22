import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2022');

  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // When the filter drop-down is set to a different year
  const handleFilterByYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filteredYear
  );

  for (let expense of filteredExpenses) {
    chartDataPoints[expense.date.getMonth()].value += expense.amount;
  }

  const chartDataPointsValues = chartDataPoints.map(
    (dataPoint) => dataPoint.value
  );

  const chartDataPointsMaxValue = Math.max(...chartDataPointsValues);

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onFilterByYear={handleFilterByYear} />
        <ExpensesChart
          dataPoints={chartDataPoints}
          expenses={filteredExpenses}
          maxValue={chartDataPointsMaxValue}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expenses;
