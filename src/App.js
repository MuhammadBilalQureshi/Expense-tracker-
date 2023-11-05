import React, { useState } from 'react';
import ExpenseFrom from './components/features/ExpenseFrom';
import DefaultLayout from './components/layout/DefaultLayout';
import ExpenseList from './components/features/ExpenseList';
import './App.css';

const expenses = [
  {
    title: 'Expense 01',
    price: 200,
    date: '2017-01-22',
  },
  {
    title: 'Expense 02',
    price: 210,
    date: '2018-02-22',
  },
  {
    title: 'Expense 03',
    price: 220,
    date: '2019-03-25',
  },
];
const App = () => {
  const [expenseLists, setExpenseLists] = useState(expenses);

  const addExpenseListHandler = (newExpense) => {
    setExpenseLists((prevstate) => [newExpense, ...prevstate]);
  };
  return (
    <DefaultLayout>
      <ExpenseFrom onExpenseAdd={addExpenseListHandler} />
      <ExpenseList expenseList={expenseLists} />
    </DefaultLayout>
  );
};

export default App;
