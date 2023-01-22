import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  return <Chart dataPoints={props.dataPoints} maxValue={props.maxValue} />;
};

export default ExpensesChart;
